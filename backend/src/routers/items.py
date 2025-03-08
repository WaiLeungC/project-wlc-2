from fastapi import APIRouter, HTTPException
from models.item import Item

router = APIRouter()

items = []


@router.post("/items")
def create_item(item: Item):
    items.append(item)
    return items


@router.get("/items", response_model=list[Item])
def list_items(limit: int = 10):
    return items[:limit]


@router.get("/items/{item_id}", response_model=Item)
def get_item(item_id: int):
    if item_id < len(items):
        return items[item_id]
    else:
        raise HTTPException(status_code=404, detail=f"Item {item_id} not found")
