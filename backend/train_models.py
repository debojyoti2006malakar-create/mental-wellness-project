import pandas as pd
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# Load datasets
mental = pd.read_csv("data/mental_health.csv")
emotion = pd.read_csv("data/goemotions.csv")

# Clean missing values
mental["statement"] = mental["statement"].fillna("")
mental["status"] = mental["status"].fillna("unknown")
emotion["text"] = emotion["text"].fillna("")

# TF-IDF vectorizer
vectorizer = TfidfVectorizer(max_features=10000, ngram_range=(1, 2))

# Fit vectorizer on combined text
combined_text = pd.concat([mental["statement"], emotion["text"]])
vectorizer.fit(combined_text)

# Mental health model
X1 = vectorizer.transform(mental["statement"])
y1 = mental["status"]

mental_model = LogisticRegression(max_iter=1000)
mental_model.fit(X1, y1)

# Save model + vectorizer
with open("models/mental_model.pkl", "wb") as f:
    pickle.dump(mental_model, f)

with open("models/vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)

print("Training completed successfully!")