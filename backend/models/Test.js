
const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
    batch: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch' },
    results_link: { type: String, required: true },
    date_uploaded: { type: Date, default: Date.now },
  });

  module.exports=mongoose.model('Test', testSchema);