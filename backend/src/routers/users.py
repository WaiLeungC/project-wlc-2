from fastapi import APIRouter, status
from models.user import UserBase
from crud.user import create_user
from database import db_dependency

router = APIRouter()


@router.post("/users", status_code=status.HTTP_201_CREATED)
async def create_user_endpoint(user: UserBase, db: db_dependency):
    return create_user(db, user)
