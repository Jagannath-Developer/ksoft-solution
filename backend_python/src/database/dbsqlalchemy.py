from loguru import logger
from sqlalchemy import create_engine,MetaData
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('mysql+pymysql://root:admin@localhost:3306/classicmodels')
meta = MetaData()

connection = engine.connect()

try:
    connection
    logger.info("successfully connected to mysql database!")
except SQLAlchemyError as err:
    logger.error(err.__cause__) 
    
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# def execute_query():
#     with open('script.sql') as file:
#     statements = re.split(r';\s*$', file.read(), flags=re.MULTILINE)
#     for statement in statements:
#         if statement:
#             engine.execute(text(statement))