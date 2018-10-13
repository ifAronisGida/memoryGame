from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('choose_a_number.html')
    card_number = int(request.form['select']) * 2
    return render_template('memory_game.html', card_number=card_number)


if __name__ == '__main__':
    app.run()
