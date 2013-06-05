import os
from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def hello():
    return send_file('templates/index.html')