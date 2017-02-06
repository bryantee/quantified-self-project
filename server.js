'use strict';

const express = require('express');
const app = express();
const strava = require('strava-v3');

app.get('/activities', (req, res) => {
    strava.athlete.listActivities({}, (err, payload) => {
        if (!err) {
            const json = {
                activities: []
            };
            payload.forEach(activity => {
                json.activities.push({
                    name: activity.name,
                    date: activity.start_date,
                    calories: (activity.kilojoules * 0.239006)
                });
            });
            res.send(json); 
        } else {
            console.log(err);
        }
    });
});

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(3000, () => {
    console.log('Started up on port 3000');
});