const express = require("express");
const app = express();
const port = 8080;

// Connects the frontend (public) with the backend
app.use(express.static('public'));

// tells server to except JSON in the body
app.use(express.json());

let storedApiKey = null

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
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

