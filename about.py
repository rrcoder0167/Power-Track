from flask import Flask

app = Flask(__name__)

@app.route('/')
@app.route('/about/')
def aboutme():
    return render_template('about.html')