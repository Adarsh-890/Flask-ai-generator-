from flask import Flask

application = Flask(__name__)  # "app" ki jagah "application" likho

@application.route('/')
def home():
    return "Hello, Flask app is running on Render!"

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=5000)
