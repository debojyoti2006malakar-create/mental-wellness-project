from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

mental_model = pickle.load(open("models/mental_model.pkl","rb"))
vectorizer = pickle.load(open("models/vectorizer.pkl","rb"))

@app.post("/analyze")
def analyze(data: dict):
    text = data["text"]

    words = text.split()

    if len(words) < 3:
        return {
            "condition": "Invalid Input",
            "score": 0,
            "suggestions": ["Please enter meaningful answers."]
        }

    if not any(char.isalpha() for char in text):
        return {
            "condition": "Invalid Input",
            "score": 0,
            "suggestions": ["Please enter valid text."]
        }

    vec = vectorizer.transform([text])

    condition = mental_model.predict(vec)[0]

    text_length = len(words)

    score = 90

    if condition == "Depression":
        score -= 25
    elif condition == "Anxiety":
        score -= 20
    elif condition == "Stress":
        score -= 15

    if text_length > 20:
        score -= 10
    if text_length > 40:
        score -= 10

        if condition == "Depression":
            suggestions = [
            "Talk to someone you trust",
            "Take sunlight walks daily",
            "Maintain regular sleep schedule"
        ]

    elif condition == "Anxiety":
        suggestions = [
            "Practice deep breathing",
            "Avoid overthinking triggers",
            "Try grounding exercises"
        ]

    elif condition == "Stress":
        suggestions = [
            "Take short breaks",
            "Prioritize tasks calmly",
            "Listen to relaxing music"
        ]

    else:
        suggestions = [
            "Maintain healthy routine",
            "Stay hydrated",
            "Take mindful breaks"
        ]
    return {
        "condition": condition,
        "score": score,
        "suggestions": suggestions
    }