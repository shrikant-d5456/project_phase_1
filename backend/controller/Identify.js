// controllers/identifyController.js
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

exports.identifyPlant = async (req, res) => {
  try {
    const filePath = req.file.path; 

    const formData = new FormData();
    formData.append("image", fs.createReadStream(filePath));

    const response = await axios.post("http://localhost:5000/identify", formData, {
      headers: formData.getHeaders(),
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
