import sys
import os

# Get project root directory
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if project_root not in sys.path:
    sys.path.append(project_root)


import uuid
import pymysql
from dotenv import load_dotenv
from datetime import datetime
from src.user.utils import hash_password
from src.user.models import User

# Load environment variables from .env
load_dotenv(os.path.join(project_root, ".env"))

# Read database credentials from .env
db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

# Data to insert
data_to_insert = (
    str(uuid.uuid4()),
    datetime.utcnow(),
    "admin",
    "admin",
    hash_password("admin"),
    "admin",
    "admin@gmail.com",
    987078907,
    True,
    False,
    False
)

# SQL query
insert_query = """
    INSERT INTO user (
        id, created_at, name, username, password, 
        emp_id, email, mobile_number, is_admin, is_vendor, is_user
    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
"""

# Function to insert data
def fun():
    try:
        connection = pymysql.connect(
            host=db_host,
            user=db_user,
            password=db_password,
            database=db_name
        )
        with connection.cursor() as cursor:
            cursor.execute(insert_query, data_to_insert)
            connection.commit()
            print("Admin user created successfully")
    except pymysql.MySQLError as e:
        print(f"Error: {e}")
    finally:
        connection.close()

# Run function
fun()
