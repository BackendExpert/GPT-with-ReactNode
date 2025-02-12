const express = require('express');
const { PythonShell } = require('python-shell');

const app = express();
app.use(express.json());

app.post('/chat', (req, res) => {
    const message = req.body.message
    PythonShell.run('./DataPy/chatbot_script.py', { args: [userMessage] }, (err, results) => {
        if (err) {
          res.status(500).send('Error processing the message');
        } else {
          res.json({ response: results[0] });
        }
    });
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
});