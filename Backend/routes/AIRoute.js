
import express from "express";

const airouter = express.Router();

const FASTAPI_URL = "http://127.0.0.1:8000";

airouter.post("/solve", async (req, res) => {
    try {
        const { question, options } = req.body;

        if (!question || !question.trim()) {
            return res.status(400).json({
                success: false,
                message: "Question is required"
            });
        }

        console.log("Sending question to FastAPI...");

        const response = await fetch(`${FASTAPI_URL}/solve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question,
                options: options || null
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                success: false,
                message: "FastAPI solver failed",
                error: data
            });
        }

        console.log("FastAPI response received");

        return res.status(200).json(data);

    } catch (error) {
        console.error("FastAPI connection error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to connect to AI service",
            error: error.message
        });
    }
});

export default airouter;

