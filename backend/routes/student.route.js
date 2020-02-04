const router = require('express').Router();

// Student Model
let Student = require('../models/Student');

// CREATE Student
router.route('/create-student').post((req, res, next) => {
  Student.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      // console.log('data', data);
      res.json(data);
      // console.log('Student created successfully!');
    }
  });
});

// READ Students
router.route('/').get((req, res, next) => {
  Student.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  });
});

// SHOW Student
router.route('/:id').get((req, res, next) => {
  Student.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  });
});

// EDIT Student
// GET a single Student
router.route('/edit-student/:id').get((req, res, next) => {
  Student.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  });
});

// UPDATE Student
router.route('/update-student/:id').put((req, res, next) => {
  Student.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    { runValidators: true },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        // console.log('Student updated successfully!');
      }
    }
  );
});

// DELETE Student
router.route('/delete-student/:id').delete((req, res, next) => {
  Student.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

module.exports = router;
