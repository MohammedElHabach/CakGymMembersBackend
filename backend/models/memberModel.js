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
    startDate:{
        type: Date,
        required: [true, "Please add a start date"],
    },
    expirationDate:{
        type: Date,
        required: [true, "Please add a expiration date"],
    },
    amountPaid:{
        type: String,
        required: [true, "Please add an amount"],
    },
    ptPackage: {
      type: Boolean,
    },
    sessions: {
      type: Number,
    },
    status: {
        type: Boolean,
      }

  },
  { timestamps: true }
);
module.exports = mongoose.model("Member", memberSchema);
