# Import flask and datetime module for showing date and time
from flask import Flask, jsonify, request
import datetime
import mysql.connector

# Replace these with your database credentials


# Establish a connection to the MySQL server
conn = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="root",
    database="hms"
)

# Check if the connection was successful
if conn.is_connected():
    print("Connected to the MySQL database")
else:
    print("Failed to connect to the database")
def autendoc(email,pas):
# Create a cursor object
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM doctors ")

    # Fetch the results
    results = cursor.fetchone()
    print(results)
    if(results==None):
        return False
    elif results[1]==pas :
        return True    
         
         
    
x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():

	# Returning an api for showing in reactjs
	return {
		'Name':"geek", 
		"Age":"22",
		"Date":x, 
		"programming":"python"
		}

	
@app.route('/docverify', methods=['POST'])
def docLogin():
    try:
        data = request.get_json()
        # Process the received data here
        print('Received data:', data)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM doctors where email='"+data['email']+"';")

        # Fetch the results
        results = cursor.fetchone()
        print(results)
        if(results==None):
            return jsonify({"message": "NO"}),300
        elif results[1]==data['pass']  :
             return jsonify({"message": results[2]})
        return jsonify({"message": "NO"}),300
    except Exception as e:
        print('Error:', str(e))
        return jsonify({"error": "An error occurred while processing the data"}), 500

@app.route('/settiming',methods=['POST'])
def settiming():
    try:
        data=request.get_json()
        print('Received data:', data)
        cursor = conn.cursor()
        cursor.execute("select * from Appointments where doctor = '"+data['usr']+"' and App_time = '"+data['time']+"' and App_date='"+data['date'][0:10]+"';")
        result=cursor.fetchone()
        if (result==None):
            print('Writing')
            cursor.execute("insert into Appointments(doctor,App_time,App_date) values('"+data['usr']+"','"+data['time']+"','"+data['date'][0:10]+"');")
            conn.commit()
            return jsonify({"message":"done"})
        print('Deleting')
        cursor.execute("delete from appointments where  doctor = '"+data['usr']+"' and App_time = '"+data['time']+"' and App_date='"+data['date'][0:10]+"';")
        conn.commit()
        return jsonify({"message":"done"})
    except Exception as e:
        print('Error:', str(e))
        return jsonify({"error": "An error occurred while processing the data"}), 500
    

@app.route('/fetchtiming',methods=['POST'])
def fetchtiming():
    try:
        data=request.get_json()
        print('Received data:', data)
        cursor = conn.cursor()
        cursor.execute("select * from Appointments where doctor = '"+data['usr']+"' and App_time = '"+data['time']+"' and App_date='"+data['date'][0:10]+"';")
        result=cursor.fetchone()
        if (result==None):
            print('not present')
            return jsonify({"message":"1"})
        print(' present')
        return jsonify({"message":"0"})
        
    except Exception as e:
        print('Error:', str(e))
        return jsonify({"error": "An error occurred while processing the data"}), 500
    

@app.route('/patverify', methods=['POST'])
def patLogin():
    try:
        data = request.get_json()
        # Process the received data here
        print('Received data:', data)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM patient where email='"+data['email']+"';")

        # Fetch the results
        results = cursor.fetchone()
        print(results)
        if(results==None):
            return jsonify({"message": "NO"}),300
        elif results[1]==data['pass']  :
             return jsonify({"message": results[2]})
        return jsonify({"message": "NO"}),300
    except Exception as e:
        print('Error:', str(e))
        return jsonify({"error": "An error occurred while processing the data"}), 500
# Running app
if __name__ == '__main__':
	app.run(debug=True)
