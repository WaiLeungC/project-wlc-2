from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base, engine


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), index=True)
    email = Column(String(320), unique=True, index=True)
    password = Column(String(128))


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(50))
    content = Column(String(280))
    user_id = Column(Integer, ForeignKey("users.id"))


Base.metadata.create_all(bind=engine)
