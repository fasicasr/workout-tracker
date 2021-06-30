const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
  day: {
     type: Date,
     required: "Enter date for your excercise"
   }, 
   exercises: [{
     name: {
       type: String,
       trim: true
       //,
       //required: "Enter a name for your excercise"
     },
     type: {
       type: String//,
       //required: "Enter the type of exercise"
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
     distance: {
      type: Number,
     },
     sets: {
       type: Number,
     },
   }
   ]
 });

 const Workout = mongoose.model('Workout', workoutSchema);

 module.exports = Workout;