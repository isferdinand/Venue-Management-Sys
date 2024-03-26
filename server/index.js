const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3002;

// Starts the server and listens for incoming requests on port
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// Creating a db connection
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'event_management_sys',
});

app.post('/login', (req, res) => {
  const sentUserName = req.body.LoginUserName;
  const sentPassword = req.body.LoginPassword;

  const SQL = 'SELECT * FROM users WHERE username = ? && password = ?';

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

// Retrieve all events
app.get('/home', (req, res) => {
  const SQL = 'SELECT * FROM events';

  db.query(SQL, (err, result) => {
    if (err) {
      res.send({ err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: 'No events found!' });
    }
  });
});

app.delete('/home/:id', (req, res) => {
  const eventId = req.params.id;

  const SQL = 'DELETE FROM events WHERE eventID = ?';

  db.query(SQL, eventId, (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .send({ message: 'Database query error', error: err });
    }

    if (result.affectedRows > 0) {
      res.send({ message: 'Event deleted successfully' });
    } else {
      res.send({ message: 'No event found with the given ID' });
    }
  });
});

app.get('/home', (req, res) => {
  const SQL = 'SELECT * FROM events';

  db.query(SQL, (err, result) => {
    if (err) {
      res.send({ err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: 'No events found!' });
    }
  });
});

// Add a new event
app.post('/addevent', (req, res) => {
  const sentEventName = req.body.eventName;
  const sentAttendees = req.body.attendees;
  const sentTime = req.body.time;
  const sentVenue = req.body.venue;
  console.log(req.body);
  //get the venuesID from the venues table
  const getVenueIdSQL = 'SELECT venueID FROM venues WHERE venueName = ?';
  db.query(getVenueIdSQL, sentVenue, (err, result) => {
    if (err) {
      return res.send({ err });
    }

    // If a venue with the given name exists
    if (result && result.length > 0) {
      const venueId = result[0].venueID;
      // const newSQL =
      //   "SELECT venueID FROM venues WHERE Status='Vacant' AND venueName = ?";

      //Then, insert the new event into the events table
      const SQL =
        'INSERT INTO events (eventType, attendees, time, venueID, venueName) VALUES (?,?,?,?,?)';

      const Values = [
        sentEventName,
        sentAttendees,
        sentTime,
        venueId,
        sentVenue,
      ];
      db.query(SQL, Values, (err, result) => {
        if (err) {
          return res.send({ err });
        }
        if (result && result.length > 0) {
          res.send(result);
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
