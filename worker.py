import os
import openai
from redis import Redis
from rq import Worker, Queue, Connection

redis_conn = Redis(host="localhost", port=6379, db=0)

def generate_image_task(prompt):
    openai.api_key = os.getenv('OPENAI_API_KEY')
    response = openai.Image.create(prompt=prompt, n=1, size="1024x1024")
    return response['data'][0]['url']

if __name__ == "__main__":
    with Connection(redis_conn):
        worker = Worker(["default"])
        worker.work()
