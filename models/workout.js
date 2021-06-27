const mongoose = require("mongoose");

const Workout = mongoose.model('Workout', { 
  day: {
     type: Date,
     required: "Enter date for your excercise"
   }, 
   excercises: [{
     name: {
       type: String,
       trim: true,
       required: "Enter a name for your excercise"
     },
     type: {
       type: String,
       required: "Enter the type of exercise"
     },
     duration: {
       type: Number,
     },
     weight: {
       type: Number,
     },
     reps: {
       type: Number,
     },
     sets: {
       type: Number,
     },
   }
   ]
 });

 module.exports = Workout;