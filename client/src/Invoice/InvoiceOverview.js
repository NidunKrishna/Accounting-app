import React, { useEffect, useState } from 'react';
import './InvoiceOverview.css';
import jsPDF from 'jspdf';
import axios from 'axios';

const InvoiceOverview = () => {
    const [val, setVal] = useState({ input: '' });
    const [res, setRes] = useState(null); // Initialize as null to handle loading state
    const [message, setMessage] = useState('');

    const date = new Date();
    const formattedIssueDate = date.toISOString().split('T')[0];
    
    const name = res?.name || "N/A";
    const id = res?.id || 'N/A'
    const invoiceDetails = {
        invoiceNumber:`F-INV${id}`,
        issueDate: formattedIssueDate,
        contactName: name,
        email: 'keethu171003@gmail.com',
        reference: 'City',
        description: 'UI Designer',
        dueDate: '2023-06-05',
        deliveryDate: '2023-09-09',
        billingFrom: 'Susy Williams',
        country: 'London',
        currency: 'USD'
    };

    const handle = (e) => {
        const { name, value } = e.target;
        setVal(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // useEffect(() => {
    //     const GET = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8000/Search/Get');
    //             console.log('API Response:', response.data);
    //             setRes(response.data);
    //         } catch (error) {
    //             console.log('Error fetching data:', error);
    //         }
    //     };

    //     GET();
    // }, []);

    const POST = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/Search', val)
            .then(response => {
                console.log('POST response:', response);
                setRes(response.data)
            })
            .catch(error => {
                console.error('Error during POST request:', error);
            });
    };

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
            console.error('Error sending email:', error);
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
            <form onSubmit={POST}>
                
                <input type='number' name='input' value={val.input} onChange={handle} />
                <button type="submit">Submit</button>
            </form>
            <h1 className="invoice-header">Invoice Overview</h1>
           
            <div className="invoice-container">
                 {res ? (
                    <div>
                        {res.map((details,index)=>(
                    <div className="invoice-details" key={index}>
                        <div className="detail-item">
                            <div><strong>Invoice No.</strong> <br />F-INV {details.id}</div>
                            <div><strong>Issue Date</strong> <br />{formattedIssueDate}</div>
                        </div>
                        </div>))}
               
                        {res.map((details, index) => (
                            <div className="detail-item" key={index}>
                                <div><strong>Contact Name</strong> <br />{details.name}</div>
                                <div><strong>Billing From</strong> <br />{invoiceDetails.billingFrom}</div>
                            </div>
                        ))}
                        {res.map((details,index)=>(
                        <div className="detail-item" key={index}>
                            <div><strong>Email</strong> <br />{invoiceDetails.email}</div>
                            <div><strong>company</strong> <br />{details.company}</div>
                        </div>
                        ))}
                        <div className="detail-item">
                            <div><strong>Reference Inv.</strong> <br />{invoiceDetails.reference}</div>
                            <div><strong>Currency</strong> <br />{invoiceDetails.currency}</div>
                        </div>
                        {res.map((details,index)=>(
                        <div className="description">
                            <strong>Description</strong> <br />{details.Quote}
                        </div>
                        ))}
                        <div className="detail-item">
                            <div><strong>Due Date</strong> <br />{invoiceDetails.dueDate}</div>
                            <div><strong>Delivery Date</strong> <br />{invoiceDetails.deliveryDate}</div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                <div className="button-container">
                    <button className="action-button" onClick={downloadPDF} disabled={!res}>Download</button>
                    <button className="action-button" onClick={sendEmail} disabled={!res}>Send Email</button>
                </div>
            </div>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default InvoiceOverview;
