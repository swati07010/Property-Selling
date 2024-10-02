const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const propertyModel = require("./Models/property");

const app = express();

// Apply middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/property", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
app.post("/propertyform", async (req, res) => {
  try {
    const newProperty = new propertyModel(req.body); // Create a new instance of the Property model
    await newProperty.save(); // Save the property data to the database
    res.status(201).json(newProperty); // Send a success response
  } catch (error) {
    res.status(400).json({ error: error.message }); // Send an error response if something goes wrong
  }
});
// app.js or your main server file
app.get("/propertyform", async (req, res) => {
  try {
    const properties = await propertyModel.find(); // Retrieve all properties
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/propertyform/:id", async (req, res) => {
  try {
    const property = await propertyModel.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.put("/propertyform/:id", async (req, res) => {
  try {
    const updatedProperty = await propertyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.delete("/propertyform/:id", async (req, res) => {
  try {
    const deletedProperty = await propertyModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
