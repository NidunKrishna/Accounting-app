const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const Invoice = require('./server')
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database:'user'
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Not connected:', err);
  } else {
    console.log('Connected to db');
    connection.release();
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "nidunnidun9@gmail.com",
    pass: "fwxydsvmmokzjoxe",
  },
});

app.use(cors());
app.use(express.json());

app.get('/api/balances', (req, res) => {
  const balances = [
    { accountName: 'Main Account', amount: 5000 },
    { accountName: 'Savings Account', amount: 3000 },
  ];
  res.json(balances);
});
app.use('/Invoice',Invoice)
app.post('/api/Auth', (req, res) => {
  const { username, password } = req.body;
  pool.query(
    'SELECT * FROM admin WHERE username = ? AND password = ?', 
    [username, password],
    (error, results) => {
      if (error) {
        console.log('Error verifying the admin:', error);
        res.status(500).send('Internal server error');
      } else if (results.length > 0) {
        console.log('Admin verified successfully');
        res.status(200).send('Successful');
      } else {
        console.log('Unverified');
        res.status(401).send('Unauthorized');
      }
    }
  );
});

app.get('/api/transactions', (req, res) => {
  const transactions = [
    { date: '2023-06-20', description: 'Invoice Payment', amount: 2000, account: { accountName: 'Main Account', accountNumber: '12345', balance: 5000, transactions: [] } },
    { date: '2023-06-21', description: 'Purchase', amount: -500, account: { accountName: 'Savings Account', accountNumber: '67890', balance: 3000, transactions: [] } },
  ];
  res.json(transactions);
});

app.post('/api/clients', (req, res) => {
  const { name, company, Des, Quote } = req.body;
  pool.query(
    'INSERT INTO clients (name, company, Des, Quote) VALUES (?, ?, ?, ?)',
    [name, company, Des, Quote],
    (err, results) => {
      if (err) {
        console.error('Error saving client details:', err);
        res.status(500).send('Error saving client details');
      } else {
        console.log('Client details saved successfully');
        res.status(200).send('Client details saved successfully');
      }
    }
  );
});

app.get('/api/fetchclient', (req, res) => {
  pool.query('SELECT name, company, Des, Quote FROM clients WHERE status = 1', (err, results) => {
    if (err) {
      console.error('Error fetching clients:', err);
      res.status(500).send('Error fetching clients');
    } else {
      console.log('Clients fetched successfully');
      res.status(200).json(results);
    }
  });
});

app.get('/api/client', (req, res) => {
  pool.query('SELECT name, company, Des, Quote, Status FROM clients', (err, results) => {
    if (err) {
      console.error('Error fetching client details:', err);
      res.status(500).send('Error fetching client details');
    } else {
      console.log('Client details fetched successfully');
      res.status(200).json(results);
    }
  });
});

app.post('/api/alter', (req, res) => {
  const { name, status } = req.body;
  pool.query(
    'UPDATE clients SET Status = ? WHERE name = ?',
    [status, name],
    (err, results) => {
      if (err) {
        console.error('Error updating client status:', err);
        res.status(500).send('Error updating client status');
      } else {
        console.log('Client status updated successfully');
        res.status(200).send('Client status updated successfully');
      }
    }
  );
});

app.post('/api/empdetails', (req, res) => {
  const { name, email, phone, position, department, joiningDate, address } = req.body;
  pool.query(
    'INSERT INTO emp (name, email, phone, position, department, joining_date, address) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [name, email, phone, position, department, joiningDate, address],
    (err, results) => {
      if (err) {
        console.log('Error saving employee details:', err);
        res.status(500).send('Error saving employee details');
      } else {
        console.log('Employee details saved successfully');
        res.status(200).send('Employee details saved successfully');
      }
    }
  );
});

app.get('/api/getemp', (req, res) => {
  pool.query('SELECT name, email FROM emp;', (err, results) => {
    if (err) {
      console.log('Error fetching employee details:', err);
      res.status(500).send('Error fetching employee details');
    } else {
      console.log('Employee details fetched successfully');
      res.status(200).json(results.length ? results : []);
    }
  });
});

app.get('/api/mail', async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: 'albedonidun@gmail.com',
      to: "keethu171003@gmail.com",
      subject: "Hey Fish Tank",
      text: "Test mail from nid",
    });
    console.log("Message sent: %s", info.messageId);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send('Error sending email');
  }
});

app.get('/api/GetCustomer', (req, res) => {
  pool.query('SELECT * FROM clients;', (err, results) => {
    if (err) {
      console.log('Error fetching client details:', err);
      res.status(500).send('Error fetching client details');
    } else {
      console.log('Client details fetched successfully');
      res.status(200).json(results);
    }
  });
});

app.get('/api/GetPending', (req, res) => {
  pool.query('SELECT * FROM clients WHERE status = 0;', (err, results) => {
    if (err) {
      console.log('Error fetching pending client details:', err);
      res.status(500).send('Error fetching pending client details');
    } else {
      console.log('Pending client details fetched successfully');
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
