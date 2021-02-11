const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        name:
        {
          type: String,
          trim: true,
          required: "Enter the name of your exercise"
        },
        type:
        {
          type: String,
          trim: true,
          required: "Enter the type of your exercise"
        },
        weight:
        {
          type: Number,
          trim: true,
        },
        sets:
        {
          type: Number,
          trim: true,
        },
        reps:
        {
          type: Number,
          trim: true,
        },
        duration:
        {
          type: Number,
          trim: true,
         
        },
        distance:
        {
          type: Number,
          trim: true
        }
    }],
});
workoutSchema.set("toJSON", {virtuals:true});

workoutSchema.virtual("totalDuration").get(function(){
  let duration = 0;

  this.exercises.forEach((exercise)=> {
    duration +=  exercise.duration 
  })
  return duration;
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
