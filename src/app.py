from flask import Flask, render_template, url_for
import jsonify
import mysql.connector

app = Flask(__name__)
PORT = 5000

connection = mysql.connector.connect(
    host="localhost",
    database="nutriverse-db",
    user="nutriverse-admin",
    password="admin",
)


@app.get('/')
def hello_world():
    return "Hello World!"


# @app.get('/home')
# def index():
#     url = url_for('static', filename='bundle.js')
#     return render_template('index.html', bundle=url)


@app.get('/Python')
def hello_python():
    return 'Hello Python!'


@app.get('/users/str:<user_name>')
def get_user_by_id(user_name):
    return "Hello " + user_name + "!"


@app.get('/users')
def get_users():
    cursor = connection.cursor(dictionary=True)
    cursor.execute("""SELECT u.id, u.username, u.display_name
                      FROM users u""")
    results = cursor.fetchall()
    cursor.close()
    response = jsonify(results)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.get('/users/<int:user_id>')
def get_user_by_id(user_id):
    cursor = connection.cursor(dictionary=True)
    cursor.execute("""SELECT u.id, u.username, u.display_name
                      FROM users AS u
                      WHERE u.id = %s""", [user_id])
    result = cursor.fetchone()
    cursor.close()
    response = jsonify(result)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == '__main__':
    app.run(debug=True, port=PORT)
