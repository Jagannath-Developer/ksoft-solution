import mysql.connector

def database():
    global mydb
    global mycursor
    try:
        if mydb.is_connected():
            pass
    except:       
        try:
            mydb = mysql.connector.connect(host='localhost',
                                                user='root',
                                                password='admin',
                                                raise_on_warnings= True,
                                                use_pure= False,
                                                autocommit= True,
                                                pool_size= 5,
                                                database = 'ksoft-ecommerce'
                                                )
            if mydb.is_connected():
                db_Info = mydb.get_server_info()
                print("Connected to MySQL Server version ", db_Info)
                mycursor = mydb.cursor(buffered=True,dictionary=True)
                mycursor.execute("select database();")
                record = mycursor.fetchone()
                print("You're connected to database: ", record)
                return mydb

        except mysql.connector.Error as e:
            print("Error while connecting to MySQL", e)
        finally:
            if mydb.is_connected():
                # cursor.close()
                # connection.close()
                print("MySQL connection is working")

def disconnect_database():
    global mydb
    global mycursor
    try:
        if mydb.is_connected():
            mycursor.close()
            mydb.close()
    except:
        pass