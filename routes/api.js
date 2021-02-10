const router = require("express").Router();

const { Workout } = require("../models");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.put("/api/workouts/:id", (req, res) => {
  const updateWorkout = req.body;
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: updateWorkout } },
    { new: true }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.status(500).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {});

module.exports = router;
