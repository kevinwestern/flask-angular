import os
from flask import Flask, send_file

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serveIndex(path):
    return send_file('templates/index.html')


if __name__ == "__main__":
    app.run(debug=True)
