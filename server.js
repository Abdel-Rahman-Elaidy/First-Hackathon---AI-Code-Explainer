const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.use(express.static('public'));

app.post("/api/key", (req, res) => {
    const apikey = req.body;
    console.log(apikey)
})

app.listen(port, () => {
    console.log("Server is running on port ", port)
});                         

