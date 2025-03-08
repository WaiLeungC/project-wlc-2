from typing import List
from fastapi import APIRouter
from models.fruit import Fruit

router = APIRouter()

memory_db = {"fruits": []}


@router.get("/fruits", response_model=List[Fruit])
def get_fruits():
    return memory_db["fruits"]


@router.post("/fruits")
def add_fruit(fruit: Fruit):
    memory_db["fruits"].append(fruit)
    return fruit
