const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5001;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
    credentials: true // Allow credentials if needed
}));

// Proxy route
app.post('/submit-form', async (req, res) => {
    const jotFormAPIKey = 'f08aa138e599d22562079cf29cfd5148';
    const formID = '242971674535062';
    const url = `https://api.jotform.com/form/${formID}/submissions`;

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
    console.log(`Server running on http://localhost:${port}`);
});