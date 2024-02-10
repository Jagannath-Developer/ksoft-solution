import asyncio
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.v1.configs.config import PROJECT_NAME,DEBUG,VERSION,PREFIX
from src.api.v1.endpoints.endpoint import router
from src.database.db import database

app = FastAPI(title=PROJECT_NAME, debug=DEBUG, version=VERSION)

origins = [
    "http://localhost:8080",
    "http://localhost:5000",
    "https://google.com",
    "https://www.google.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router,prefix=PREFIX)
database()

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    config = uvicorn.Config(
        app="main:app",
        host="localhost",
        port=8000,
        reload=True,
        workers=2,
        loop=loop,
    )
    server = uvicorn.Server(config)
    loop.run_until_complete(server.serve())
