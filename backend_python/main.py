import asyncio
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException

from src.database.db import get_db
from src.helper.error_confg import http_error_handler
from src.helper.validation_errorconfig import http422_error_handler
from src.api.v1.configs.config import PROJECT_NAME,DEBUG,VERSION,PREFIX
from src.api.v1.endpoints.endpoint import router

get_db()

origins = [
    "http://localhost:8080",
    "http://localhost:5000",
    "https://google.com",
    "https://www.google.com"
]
app = FastAPI(title=PROJECT_NAME, debug=DEBUG, version=VERSION)
app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
app.add_exception_handler(HTTPException, http_error_handler)
app.add_exception_handler(RequestValidationError, http422_error_handler)
app.include_router(router,prefix=PREFIX)

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
