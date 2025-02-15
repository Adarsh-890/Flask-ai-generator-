from flask import Flask, request, jsonify, render_template
     from flask_limiter import Limiter
     from flask_limiter.util import get_remote_address
     from flask_caching import Cache
     import openai
     import os
     from dotenv import load_dotenv

     load_dotenv()
     app = Flask(__name__)
     cache = Cache(app, config={'CACHE_TYPE': 'simple'})
     limiter = Limiter(app, key_func=get_remote_address)

     openai.api_key = os.getenv('OPENAI_KEY')

     @app.route('/')
     def home():
         return render_template('index.html')

     @app.route('/generate', methods=['POST'])
     @limiter.limit("5 per minute")
     @cache.cached(timeout=60)
     def generate():
         try:
             prompt = request.json.get('prompt')
             response = openai.ChatCompletion.create(
                 model="gpt-4",
                 messages=[{"role": "user", "content": prompt}]
             )
             return jsonify({"text": response.choices[0].message.content})
         except Exception as e:
             return jsonify({"error": str(e)}), 500

     if __name__ == '__main__':
         app.run(host='0.0.0.0', port=5000)
