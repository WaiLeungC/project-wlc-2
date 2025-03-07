from typing import Annotated
from fastapi import FastAPI, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
import models.models as models
from database import engine, SessionLocal
from routes.items import router as items_router
from routes.fruits import router as fruits_router

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

routers = [items_router, fruits_router]

for router in routers:
    app.include_router(router)


@app.get("/")
def root():
    return {"message": "Hello, World!"}


models.Base.metadata.create_all(bind=engine)


class UserBase(BaseModel):
    username: str
    email: str


class PostBase(BaseModel):
    title: str
    content: str
    user_id: int


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@app.post("/users/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserBase, db: db_dependency):
    db_user = models.User(**user.model_dump())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
