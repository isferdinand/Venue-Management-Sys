const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3002;

// Starts the server and listens for incoming requests on port 3002.
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// Creating a db connection
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'venue_management_sys',
});

app.post('/login', (req, res) => {
  const sentUserName = req.body.LoginUserName;
  const sentPassword = req.body.LoginPassword;

  const SQL = 'SELECT * FROM users WHERE userName = ? && password = ?';

  const Values = [sentUserName, sentPassword];

  db.query(SQL, Values, (err, result) => {
    if (err) {
      res.send({ err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: 'Wrong email or password!' });
    }
  });
});

// Add a new event
app.post('/addevent', (req, res) => {
  const sentEventName = req.body.eventName;
  const sentAttendees = req.body.attendees;
  const sentTime = req.body.time;
  const sentVenue = req.body.venue;

  //get the venuesID from the venues table
  const getVenueIdSQL = 'SELECT venueID FROM venues WHERE venueName = ?';
  db.query(getVenueIdSQL, sentVenue, (err, result) => {
    if (err) {
      return res.send({ err });
    }

    // If a venue with the given name exists
    if (result && result.length > 0) {
      const venueID = result[0].venueID;

      //Then, insert the new event into the events table
      const SQL =
        'INSERT INTO events (eventType, attendees, time, venueName, venueID) VALUES (?,?,?,?,?)';

      const Values = [
        sentEventName,
        sentAttendees,
        sentTime,
        sentVenue,
        venueID,
      ];

      db.query(SQL, Values, (err, result) => {
        if (err) {
          return res.send({ err });
        }
        if (result && result.length > 0) {
          res.send(result);
          console.log(result);
        } else {
          res.send({ message: 'Error!' });
        }
      });
    } else {
      res.send({ message: 'Venue not found!' });
    }
  });

  //Change password
  app.post('/profile', (req, res) => {
    const sentUserName = req.body.UserName;
    const sentOldPassword = req.body.OldPassword;
    const sentNewPassword = req.body.NewPassword;

    const SQL = 'SELECT * FROM users WHERE userName = ? && password = ?';

    const Values = [sentUserName, sentOldPassword];

    db.query(SQL, Values, (err, result) => {
      if (err) {
        res.send({ err });
      }
      if (result.length > 0) {
        const updateSQL = 'UPDATE users SET password = ? WHERE userName = ?';
        const updateValues = [sentNewPassword, sentUserName];

        db.query(updateSQL, updateValues, (err, result) => {
          if (err) {
            res.send({ err });
          }
          res.send({ message: 'Password changed successfully!' });
        });
      } else {
        res.send({ message: 'Invalid username or old password!' });
      }
    });
  });
});
