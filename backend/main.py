from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# ✅ Enable CORS for React frontend (adjust origin in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Pydantic model for contact form data
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# ✅ Root Route
@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI!"}

# ✅ About Route
@app.get("/about")
def read_about():
    return {"message": "About Us page"}

# ✅ Contact GET Route
@app.get("/contact")
def read_contact():
    return {"message": "Contact Us page"}

# ✅ POST Route for Contact Form Submission
@app.post("/contact")
def submit_contact(form_data: ContactForm):
    # Print data to terminal (with flush=True for instant output)
    print("✅ Received Contact Form in backend:", form_data, flush=True)

    # Optional: Save to database (MongoDB) here

    return {
        "message": "Contact form submitted successfully from backend to frontend",
        "data": {
            "name": form_data.name,
            "email": form_data.email,
            "message": form_data.message
        }
    }
