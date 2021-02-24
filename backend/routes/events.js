const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//database
const Users = require("../models/users");
const Events = require("../models/events");
const AppliyingForm = require("../models/appliyingForm");
const Responses = require("../models/appliyingForm");

router.get("/", (req, res) => {
  Events.find()
    // .populate('owner')
    // .populate('AppliyingForm')
    .then((events) => {
      res.json({ msg: events });
    })
    .catch((err) => res.json({ msg: err }));
});

//search
router.post("/search", (req, res) => {
  let { searchValue } = req.body
  Events.find({ $text: { $search: searchValue } })
    .then((events) => {
      res.json({ msg: events });
    })
    .catch((err) => res.json({ msg: err }));
});

//Add event
router.post("/add", (req, res) => {
  const { event, user } = req.body
  event['owner'] = user

  
  Events.create(event)
    .then((event) => {
      res.json({ msg: "user hasbeen register", event: event });
    })
})


// edit
///////////////////////////// NOT WORKING ///////////////////////////
router.put("/editEvent/:eventId", (req, res) => {
  let eventId = req.params.eventId
  const {
    name,
    location,
    eventType,
    description,
    startDate,
    endDate,
    startTime,
    endTime
  } = req.body

  Events.findByIdAndUpdate(eventId, {
    name: name,
    location: location,
    eventType: eventType,
    description: description,
    startDate: startDate,
    endDate: endDate,
    startTime: startTime,
    endTime: endTime
  })
    .then(editEvent => {
      res.json({ msg: "Event is editing", editEvent })
    })
});


//Delete events
router.delete('/deleteEvent/:eventId', (req, res) => {
  let eventId = req.params.eventId
  Events.deleteOne({ _id: eventId })
    .then(deletedEvent => {
      res.json({ msg: "Event deleted", deletedEvent })
    })
})

router.get("/AppliyingForm", (req, res) => {
  AppliyingForm.find()
    // .populate('childSchema.appliedOrganizers')
    .populate('event')
    .then((forms) => {
      res.json({ msg: forms });
    })
    .catch((err) => res.json({ msg: err }));

  // Responses.find().populate('appliedOrganizers')
  // .then((forms) => {
  //   res.json({ msg: forms });
  // })
  // .catch((err) => res.json({ msg: err }));
});

//to be edit by Rahmah
router.post("/applyingForm", (req, res) => {
  const { formData, event } = req.body
  formData['event'] = event

  AppliyingForm.create(formData)
    .then((e) => {
      res.json({ msg: "user hasbeen register", e: e });
    })
})

router.post("/applyingForm/:formId", async (req, res) => {
  let formId = req.params.formId
  const { massage, shift } = req.body.formData

  const newRes = {
    appliedOrganizer: req.body.orgnizer,
    massage: massage,
    shift: shift
  }

  try {
    const appliying_form = await AppliyingForm.findById(formId)
    appliying_form.responses.push(newRes)
    appliying_form.save()
    res.json({ msg: "Form is editing", appliying_form })
  } catch (err) {
    res.json({ msg: "Error occurred while updating form" })
  }
});


router.post("/respons/:formId", async (req, res) => {
  const { formId } = req.params
  const { status, resId } = req.body

  try {
    const appliying_form = await AppliyingForm.findById(formId)
    const respons = appliying_form.responses.find(resp => resp._id == resId)
    respons['status'] = status
    appliying_form.save()
    res.json({ msg: "Form is editing", appliying_form })
  } catch (err) {
    res.json({ msg: "Error occurred while updating form" })
  }

});

module.exports = router;