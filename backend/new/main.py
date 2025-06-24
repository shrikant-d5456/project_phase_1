from flask import Flask, request, jsonify
import os, base64, io
from PIL import Image
from dotenv import load_dotenv
from langchain.schema.messages import HumanMessage
from langchain_openai import ChatOpenAI


load_dotenv()
app = Flask(__name__)

llm = ChatOpenAI(
    model="gpt-4o",
    temperature=0,
    max_tokens=300
)

@app.route("/identify", methods=["POST"])
def identify_plant():
    try:
        if 'image' not in request.files:
            return jsonify({"error": "Missing image"}), 400

        file = request.files['image']
        image = Image.open(io.BytesIO(file.read()))
        buffer = io.BytesIO()
        image.save(buffer, format="PNG")
        image_base64 = base64.b64encode(buffer.getvalue()).decode()

        message = HumanMessage(content=[
            {"type": "text", "text": "Identify the herb shown in this image. Just give the common plant name."},
            {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{image_base64}"}}
        ])

        result = llm.invoke([message])
        return jsonify({"status": "success", "result": result.content})

    except Exception as e:
        return jsonify({"status": "failure", "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
