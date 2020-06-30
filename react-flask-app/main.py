import time
from flask import Flask

app = Flask("__main__")


@app.route("/time")
def get_current_time():
    return {'time': time.time()}