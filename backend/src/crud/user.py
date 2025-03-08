from sqlalchemy.orm import Session
import models.database_models as database_models
from models.user import UserBase


def create_user(db: Session, user: UserBase):
    db_user = database_models.User(**user.model_dump())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
