import os
import json
from loguru import logger
from fastapi import APIRouter
from typing import Any
from pathlib import Path
from sqlalchemy import text

from src.database.dbsqlalchemy import connection

router = APIRouter()
ROOT_PATH = Path(__file__).parent.parent

product_database_sql_path:str = os.path.join(f'{ROOT_PATH}\database\sql','product.sql')

@router.get('/', name='customers: get_all_customers')
async def getAllProducts() -> Any:
    products:list = [];
    with open(f'{product_database_sql_path}', 'r') as sql_file:
        with connection as conn:
            # result_iterator = conn.execute(text(sql_file.read()))
            rs = conn.execute(text('SELECT * FROM customers'))
            for r in rs:
                print(json.dump(dict(r)))
            # print(json.dumps([dict(r) for r in rs]),'d')
    return {
        "message":"success"
    }
    
    
