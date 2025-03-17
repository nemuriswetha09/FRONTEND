from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI!"}
    
@app.get("/about")
def read_about():
    return {"message": "About Us page"}

@app.get("/contact")
def read_contact():
    return {"message": "Contact Us page"}
