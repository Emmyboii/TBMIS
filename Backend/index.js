const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL, // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
    credentials: true // Allow credentials if needed
}));

// Proxy route
app.post('/submit-form', async (req, res) => {
    const jotFormAPIKey =  process.env.JOTFORM_API_KEY;
    const FORM_ID = '242971674535062';
    const url = `https://api.jotform.com/form/${FORM_ID}/submissions`;

    try {
        const response = await axios.post(url, req.body, {
            headers: {
                Authorization: `Bearer ${jotFormAPIKey}`,
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
});

app.listen(port, () => {
    console.log(`Backend server running on ${process.env.BACKEND_URL}`);
});