from flask import Flask, request, jsonify
import os
from enum import Enum
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import base64
import httpx  # synchronous usage here
from PIL import Image

load_dotenv()

app = Flask(__name__)

MONGO_URI = os.getenv("MONGO_URI") or "mongodb+srv://dalvishrikant5456:ziYrZCmosHeBTFhM@medicalinfo.gkodc.mongodb.net/?retryWrites=true&w=majority&appName=medicalInfo"
PLANT_API_URL = "https://plant.id/api/v3/identify"
PLANT_API_KEY = os.getenv("PLANT_API_KEY") or "TjSTtA8KHMGPIlrSThe3b40cHCxBMfjvnyMJDYshaNZ4TOuf3m"

client = AsyncIOMotorClient(MONGO_URI)
db = client["plant_database"]
collection = db["plant_identification"]

class Status(str, Enum):
    SUCCESS = "success"
    PENDING = "pending"
    FAILURE = "failure"

@app.route("/identify", methods=["POST"])
def identify_plant():
    try:
        # Check if the image was uploaded
        if 'image' not in request.files:
            return jsonify({"error": "Missing image file"}), 400

        file = request.files['image']
        image_bytes = file.read()

        # Encode to base64 for the Plant.ID API
        image_base64 = base64.b64encode(image_bytes).decode('utf-8')

        headers = {
            "Api-Key": PLANT_API_KEY,
            "Content-Type": "application/json"
        }

        payload = {
            "images": [image_base64],
            "similar_images": True
        }

        # Make synchronous HTTP request using httpx
        response = httpx.post(PLANT_API_URL, json=payload, headers=headers)

        if response.status_code == 200:
            result = response.json()
            status = Status.SUCCESS
        else:
            result = {"error": "Plant ID API failure", "status_code": response.status_code}
            status = Status.FAILURE

        doc = {
            "status": status,
            "result": result
        }

        # Insert to MongoDB (async insert via fire-and-forget)
        import asyncio
        asyncio.create_task(collection.insert_one(doc))

        return jsonify({"status": status, "result": result}), 200

    except Exception as e:
        return jsonify({"status": Status.FAILURE, "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
