// // models/Pdf.js
// const mongoose = require('mongoose');

// const pdfSchema = new mongoose.Schema({
//   date: { type: Date, default: Date.now },
//   link: { type: String, required: true },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming User is the model for your users
// });

// const Pdf = mongoose.model('Pdf', pdfSchema);

// module.exports = Pdf;

// models/Pdf.js
const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming User is the model for your users
  document: { type: Buffer, required: false },
});

const Pdf = mongoose.model('Pdf', pdfSchema);

module.exports = Pdf;