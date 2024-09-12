const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');

dotenv.config();

const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.json());

const validateRequest = [
  body('invoiceNumber').notEmpty().withMessage('Invoice number is required'),
  body('issueDate').custom(value => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error('Valid issue date is required');
    }
    return true;
  }).withMessage('Valid issue date is required'),
  body('contactName').notEmpty().withMessage('Contact name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('reference').notEmpty().withMessage('Reference is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('dueDate').isISO8601().toDate().withMessage('Valid due date is required'),
  body('deliveryDate').isISO8601().toDate().withMessage('Valid delivery date is required'),
  body('billingFrom').notEmpty().withMessage('Billing from is required'),
  body('country').notEmpty().withMessage('Country is required'),
  body('currency').notEmpty().withMessage('Currency is required'),
];


router.post('/', validateRequest, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ errors: errors.array() });
  }

  const { invoiceNumber, issueDate, contactName, email, reference, description, dueDate, deliveryDate, billingFrom, country, currency } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Invoice Details',
    text: `
      Invoice No: ${invoiceNumber}
      Issue Date: ${issueDate}
      Contact Name: ${contactName}
      Email: ${email}
      Reference: ${reference}
      Description: ${description}
      Due Date: ${dueDate}
      Delivery Date: ${deliveryDate}
      Billing From: ${billingFrom}
      Country: ${country}
      Currency: ${currency}
    `
  };

  transporter.sendMail(mailOptions)
    .then(info => {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    })
    .catch(error => {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error: Failed to send email', error: error.message });
    });
});

module.exports = router;
