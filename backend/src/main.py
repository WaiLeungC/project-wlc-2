from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.items import router as items_router
from routers.fruits import router as fruits_router
from routers.users import router as users_router

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

routers = [items_router, fruits_router, users_router]

for router in routers:
    app.include_router(router)


@app.get("/")
def root():
    return {"message": "Hello, World!"}
