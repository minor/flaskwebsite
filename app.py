import io
import json
import os

import datetime
import time
from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

@app.route('/')
def index():
    age = int((datetime.date.today() - datetime.date(2004, 12, 15)).days / 365)
    return render_template('home.html', age=age)

@app.route('/base')
def base():
    return render_template('base.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return redirect("mailto:saurishs1215@gmail.com?subject=Hello%20Saurish%20from%20the%20Website!")

@app.route('/blog')
def blog():
    return redirect("https://ss.bearblog.dev/")

@app.errorhandler(404)
def page_not_found(e):
    return render_template('error.html'), 404

def get_static_file(path):
    site_root = os.path.realpath(os.path.dirname(__file__))
    return os.path.join(site_root, path)


def get_static_json(path):
    return json.load(open(get_static_file(path)))


if __name__ == "__main__":
    print("running py app")
    app.run()
