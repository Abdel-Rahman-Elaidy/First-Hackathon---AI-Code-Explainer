const express = require("express");
const app = express();
const port = 8080;

let storedApiKey = null

// Connects the frontend (public) with the backend
app.use(express.static('public'));

// == Middleware ==

// tells server to except JSON in the body
app.use(express.json());

// Recieves and stores the API key from the frontend
app.post("/store-key", (req, res) => {
    const apiKey = req.body.apiKey

    if (!apiKey) {
        alert("Failed to receive API key.")
        res.status(400).json({message: "API Key is Missing."})
        return;
    } 

    storedApiKey = apiKey;
    console.log("API Key is: ", storedApiKey)
    res.json({message: "API key saved"})
});


app.post("/submitted-code", (req, res) => {
    const submittedCode = req.body.code;

    if (!submittedCode) {
        alert("Failed to receive code.")
        res.status(400).json({message: "Code is Missing."})
        return;
    } 

    console.log("Code is: ", 
        submittedCode)
    res.json({message: "Code is saved"})
})

// Runs the server and listens on the specified port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

