const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/send-to-flask', async (req, res) => {
  try {
    const flaskResponse = await axios.post('http://localhost:5000/api/data', {
      status: req.body.status || "pending",
      payload: req.body.payload || {}
    });

    const { status } = flaskResponse.data;

    if (status === "success") {
      return res.send("✅ Operation successful.");
    } else if (status === "pending") {
      return res.send("⏳ Operation pending.");
    } else if (status === "failure") {
      return res.send("❌ Operation failed.");
    } else {
      return res.status(400).send("⚠️ Unknown status.");
    }

  } catch (error) {
    console.error("Error calling Flask API:", error.message);
    res.status(500).send("Server error.");
  }
});

app.listen(3000, () => {
  console.log('Express server running on http://localhost:3000');
});
