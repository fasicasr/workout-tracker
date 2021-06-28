const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

router.get("/api/workouts", (req, res) => {
  Workout.find({})
  .then(workouts => {
    res.json(workouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log("DOING IT'S THING ...")
 
  Workout.findOne({"_id": req.params.id})
    .then(workouts => {
      exercises = workouts.exercises
      exercises.push(req.body)
      
      Workout.findOneAndUpdate({"_id": req.params.id}, {$set: {"exercises": exercises}}, { "new": true })
        .then(workouts => {
          res.json(workouts);
        })
        .catch(err => {
          res.status(400).json(err);
        })
        .catch(err => {
          res.status(400).json(err);
        })
      })
  })
   
    
router.post("/api/workouts", (req, res) => {
  Workout.create({day: Date.now()})
  .then(workouts => {
    res.json(workouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});


module.exports = router;
