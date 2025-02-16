from flask import Flask, request, jsonify, render_template
import os
import openai
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import redis
from rq import Queue
from worker import generate_image_task

app = Flask(__name__)
CORS(app)

# Rate Limiting
limiter = Limiter(app, key_func=get_remote_address)

# Redis Queue Setup
redis_conn = redis.Redis(host="localhost", port=6379, db=0)
queue = Queue(connection=redis_conn)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/generate', methods=['POST'])
@limiter.limit("5 per minute")
def generate():
    data = request.json
    prompt = data.get('prompt')
    job = queue.enqueue(generate_image_task, prompt)
    return jsonify({"job_id": job.id}), 202

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

