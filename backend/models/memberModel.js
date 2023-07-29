const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    phone: {
      type: String,
      required: [true, "Please add a phone number"],
      unique: true,
    },
    startDate: {
      type: Date,
      required: [true, "Please add a start date"],
    },
    expirationDate: {
      type: Date,
      required: [true, "Please add a expiration date"],
    },
    amountPaid: {
      type: String,
      required: [true, "Please add an amount"],
    },
    ptPackage: {
      type: Boolean,
      required: [true, "Please specify the value of pt package"],
    },
    sessions: {
      type: Number,
    },
    trainer:{
      type: String,
      required: [true, "Please add a trainer"],
    },
    // attendance: [
    //   {
    //     date: {
    //       type: Date,
    //       required: true,
    //     },
    //     status: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Member", memberSchema);
