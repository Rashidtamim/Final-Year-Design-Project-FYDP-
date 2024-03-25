const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Database to store user information
const userDatabase = {};

// User registration endpoint
app.post('/register', (req, res) => {
    const { user_type, user_info } = req.body;

    if (user_type === 'C' || user_type === 'HP' || user_type === 'IC') {
        userDatabase[user_info.user_id] = { user_type, user_info };
        res.json({ status: 'success', message: 'User registered successfully' });
    } else {
        res.status(400).json({ status: 'error', message: 'Invalid user type' });
    }
});

// Default route handler
app.get('/', (req, res) => {
    res.send('Welcome to the registration server');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

