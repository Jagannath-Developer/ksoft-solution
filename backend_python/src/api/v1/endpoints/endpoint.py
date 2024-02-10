from fastapi import APIRouter
from src.routes.products import router as productRouter

router = APIRouter()
router.include_router(productRouter, prefix="/products", tags=["PRODUCTS"])