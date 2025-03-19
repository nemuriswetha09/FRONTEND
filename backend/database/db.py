from motor.motor_asyncio import AsyncIOMotorClient

MONGO_DETAILS = "mongodb://localhost:27017"  # Replace with your MongoDB URI

client = AsyncIOMotorClient(MONGO_DETAILS)
database = client.contact_db  # Database name
contact_collection = database.get_collection("contacts")  # Collection name
