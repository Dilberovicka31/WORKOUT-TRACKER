const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: Date,
  exercises: [
    {
      type: {
          String,
          required: "Enter a type of workout"

      },
      name: {
          String,
          required: "Enter a name of the workout"
        },
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
