const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/realestate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Define Property schema
const propertySchema = new mongoose.Schema({
  price: String,
  landSpace: String,
  furnishing: String,
  bhk: String,
  contact: String,
  location: String,
  details: String,
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

// ===================== ROUTES ======================= //

// Get all properties
app.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});
   
// Add a new property
app.post('/properties', async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add property' });
  }
});

// Update only the contact number
app.put('/properties/:id', async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { contact: req.body.contact },
      { new: true }
    );
    if (!updatedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(updatedProperty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// Delete a property
app.delete('/properties/:id', async (req, res) => {
  try {
    const result = await Property.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.sendStatus(204); // No content
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete property' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
