import React, { useEffect, useState } from 'react';
import './InvoiceOverview.css';
import jsPDF from 'jspdf';
import axios from 'axios';

const InvoiceOverview = () => {
    var invoiceDetails = {
        invoiceNumber: 'F-012345-65',
        issueDate: '05-02-2023',
        contactName: 'Jack Adams',
        email: 'keethu171003@gmail.com',
        reference: 'City',
        description: 'UI Designer',
        dueDate: '2023-06-05',
        deliveryDate: '2023-09-09',
        billingFrom: 'Susy Williams',
        country: 'London',
        currency: 'USD'
    };
    useEffect(()=>{
        Get();
    },[])
    const [message, setMessage] = useState('');
    const [details,setDetails] = useState([])
    const Get = () => {
        axios.get('http://localhost:8000/Retrieve').then(response=>{
            setDetails(response.data);
            console.log(response.data);
        })
    }
    const sendEmail = async () => {
        try {
            const response = await fetch('http://localhost:8000/Invoice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(invoiceDetails)
            });

            if (response.ok) {
                const result = await response.text();
                console.log('Server response:', result);
                setMessage('Email sent successfully!');
            } else {
                const result = await response.text();
                console.error('Server response:', result);
                setMessage('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error: Failed to send email');
        }
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text('Invoice Overview', 10, 10);
        doc.text(`Invoice No: ${invoiceDetails.invoiceNumber}`, 10, 20);
        doc.text(`Issue Date: ${invoiceDetails.issueDate}`, 10, 30);
        doc.text(`Contact Name: ${invoiceDetails.contactName}`, 10, 40);
        doc.text(`Email: ${invoiceDetails.email}`, 10, 50);
        doc.text(`Reference: ${invoiceDetails.reference}`, 10, 60);
        doc.text(`Description: ${invoiceDetails.description}`, 10, 70);
        doc.text(`Due Date: ${invoiceDetails.dueDate}`, 10, 80);
        doc.text(`Delivery Date: ${invoiceDetails.deliveryDate}`, 10, 90);
        doc.text(`Billing From: ${invoiceDetails.billingFrom}`, 10, 100);
        doc.text(`Country: ${invoiceDetails.country}`, 10, 110);
        doc.text(`Currency: ${invoiceDetails.currency}`, 10, 120);
        doc.save('invoice.pdf');
    };

    return (
        <div className="page-container">
            <h1 className="invoice-header">Invoice Overview</h1>
            <div className="invoice-container">
                <div className="invoice-details">
                    <div className="detail-item">
                        <div><strong>Invoice No.</strong> <br />{invoiceDetails.invoiceNumber}</div>
                        <div><strong>Issue Date</strong> <br />{invoiceDetails.issueDate}</div>
                    </div>
                    <div className="detail-item">
                        <div><strong>Contact Name</strong> <br />{invoiceDetails.contactName}</div>
                        <div><strong>Billing From</strong> <br />{invoiceDetails.billingFrom}</div>
                    </div>
                    <div className="detail-item">
                        <div><strong>Email</strong> <br />{invoiceDetails.email}</div>
                        <div><strong>Country</strong> <br />{invoiceDetails.country}</div>
                    </div>
                    <div className="detail-item">
                        <div><strong>Reference Inv.</strong> <br />{invoiceDetails.reference}</div>
                        <div><strong>Currency</strong> <br />{invoiceDetails.currency}</div>
                    </div>
                    <div className="description">
                        <strong>Description</strong> <br />{invoiceDetails.description}
                    </div>
                    <div className="detail-item">
                        <div><strong>Due Date</strong> <br />{invoiceDetails.dueDate}</div>
                        <div><strong>Delivery Date</strong> <br />{invoiceDetails.deliveryDate}</div>
                    </div>
                </div>
                <div className="button-container">
                    <button className="action-button" onClick={downloadPDF}>Download</button>
                    <button className="action-button" onClick={sendEmail}>Send Email</button>
                </div>
            </div>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default InvoiceOverview;
