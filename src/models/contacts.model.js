const mongoose = require("mongoose");
 
const contactsSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    },
    deletedAt: {
      type: Date,
      default: null 
    }
  },
  {
    versionKey: false,
    strict: true
  }
);

module.exports = mongoose.model("Contacts", contactsSchema);