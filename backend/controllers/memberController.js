const asyncHandler = require("express-async-handler");
const Member = require("../models/memberModel");
// @desc    Get members
// @route   GET /api/members
// @access  Private
const getMembers = async (req, res) => {
  const members = await Member.find();
  res.status(200).json(members);
};

// @desc    Create member
// @route   POST /api/members
// @access  Private
const createMember = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name field");
  }

  if (!req.body.phone) {
    res.status(400);
    throw new Error("Please add a phone");
  }

  if (!req.body.startDate) {
    res.status(400);
    throw new Error("Please add a start date");
  }

  if (!req.body.expirationDate) {
    res.status(400);
    throw new Error("Please add an expiration date");
  }

  if (!req.body.amountPaid) {
    res.status(400);
    throw new Error("Please add an amount paid");
  }

  if (!req.body.trainer) {
    res.status(400);
    throw new Error("Please add a trainer");
  }

  const member = await Member.create({
    name: req.body.name,
    phone: req.body.phone,
    startDate: new Date(req.body.startDate),
    expirationDate: new Date(req.body.expirationDate),
    amountPaid: req.body.amountPaid,
    ptPackage: req.body.ptPackage,
    sessions: req.body.sessions,
    status: req.body.status,
    trainer: req.body.trainer,
  });

  res.status(200).json(member);
});

// @desc    Update member
// @route   PUT /api/members/:id
// @access  Private
const updateMember = asyncHandler(async (req, res) => {
  const member = await Member.findById(req.params.id);
  if (!member) {
    res.status(400);
    throw new Error("Member Not Found");
  }
  const updatedMember = await Member.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedMember);
});

// @desc    Delete member
// @route   DELETE /api/members/:id
// @access  Private
const deleteMember = asyncHandler(async (req, res) => {
  const member = await Member.findById(req.params.id);
  if (!member) {
    res.status(400);
    throw new Error("Member Not Found");
  }
  await member.deleteOne({ _id: req.params.id });
  res.status(200).json({ id: req.params.id, msg: "Deleted Successfully" });
});

// @desc    Retrieve expiration date by phone number
// @route   POST /api/members
// @access  Private
const getExpirationDateByPhone = asyncHandler(async (req, res) => {
  if (!req.body.phone) {
    res.status(400).json({ msg: "Please enter a phone number" });
  }

  const phoneNumber = req.body.phone;

  try {
    const member = await Member.findOne({ phone: phoneNumber });

    if (!member) {
      return res.status(404).json({ msg: "Member not found" });
    }

    const { expirationDate,ptPackage,trainer } = member;
    return res.status(200).json({ expirationDate,ptPackage,trainer });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = {
  getMembers,
  createMember,
  updateMember,
  deleteMember,
  getExpirationDateByPhone,
};
