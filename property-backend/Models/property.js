const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  rentalPrice: { type: String, required: true },
  propertyType: { type: String, required: true },
  bedrooms: { type: String, required: true },
  bathrooms: { type: String, required: true },
  amenities: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Property", propertySchema);
