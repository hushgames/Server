const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

let messages = [];

app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/send", (req, res) => {
    let name = req.query.message;
    console.log(name);
    if (name) {
        messages.push(name);
        console.log(messages);
    }
    res.send("New Message Added");
});

app.get("/messagelist", (req, res) => {
    res.send(messages);
});

app.post("/clearMessages", (req, res) => {
    messages = [];
    res.send("cleared messages");
});

app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log("Server running on port" + process.env.PORT);
});
