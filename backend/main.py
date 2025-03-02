from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.items import router as items_router

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(items_router)


@app.get("/")
def root():
    return {"message": "Hello, World!"}
