import datetime
import os
from fastapi import APIRouter
from typing import Any
from pathlib import Path
from src.database.db import database
import mysql.connector

router = APIRouter()
ROOT_PATH = Path(__file__).parent.parent

product_database_sql_path = os.path.join(f'{ROOT_PATH}\database\sql','product.sql')

def fetch_count():
    try:
        database()
        global mycursor
        with open(f'{product_database_sql_path}', 'r') as sql_file:
            result_iterator = mycursor.execute(sql_file.read(), multi=True)
            for res in result_iterator:
                print("Running query: ")  # Will print out a short representation of the query
                print("Running query: ", res)  # Will print out a short representation of the query
                print(f"Affected {res.rowcount} rows" )
        
    except mysql.connector.Error as q:
        print("["+datetime.datetime.now().strftime("%a %b %d, %Y %I:%M:%S %p")+"] Database Error: "+str(q)+"\nProcedure: fetch_count()")


@router.get('/')
async def getAllProducts() -> Any:
    fetch_count()
    return {
        "message":"success"
    }
    
