from pymongo import MongoClient
import json

# 🔌 Connect to local MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["realestate"]
collection = db["properties"]

# 🏠 Sample property data
sample_data = [
    {
        "price": "₹40L",
        "landSpace": "1000 sq.ft",
        "furnishing": "Unfurnished",
        "bhk": "1BHK",
        "contact": "9123456789",
        "location": "Coimbatore",
        "details": "Close to tech park"
    },
    {
        "price": "₹75L",
        "landSpace": "1800 sq.ft",
        "furnishing": "Semi-Furnished",
        "bhk": "3BHK",
        "contact": "9012345678",
        "location": "Bangalore",
        "details": "Gated community, clubhouse access"
    },
    {
        "price": "₹55L",
        "landSpace": "1400 sq.ft",
        "furnishing": "Furnished",
        "bhk": "2BHK",
        "contact": "9876543210",
        "location": "Chennai",
        "details": "Near metro station"
    }
]
with open("sample_properties.json", "r") as f:
    sample_data = json.load(f)
# 📥 Insert into MongoDB
insert_result = collection.insert_many(sample_data)
print(f"Inserted {len(insert_result.inserted_ids)} properties into MongoDB.")
