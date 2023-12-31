# # from dotenv import load_dotenv
# from pymongo import MongoClient
# from flask_pymongo import PyMongo
# from flask import Flask
# # import os
# # from pathlib import Path
# # app = Flask(__name__)
#
# # mongo = PyMongo(app)
# uri = "URI"
# # app.config['MONGO_URI'] = uri
#
# # Set the Stable API version when creating a new client
# client = MongoClient(uri,
#                      tls=True,
#                      tlsCertificateKeyFile="CERTIFICATE")
#
# # Send a ping to confirm a successful connection
# try:
#     client.admin.command('ping')
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)
#
# # Replace the placeholder with your Atlas connection string
#
# # Send a ping to confirm a successful connection
#
# # @app.route('/')
# # def hello():
# #     return '<h1>WCU CS Club</h1>'
#

from flask import Flask
from pymongo import MongoClient
import config

# Initialize the Flask app
app = Flask(__name__)


uri = "mongodb+srv://{}:{}@wcucsclub.5riiihg.mongodb.net/?retryWrites=true&w=majority".format(config.mongo_user, config.mongo_pass)

# Create a new client and connect to the server
client = MongoClient(uri)


# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

# Set up the app route
# @app.route('/')
# def hello():
#     return '<h1>WCU CS Club</h1>'
