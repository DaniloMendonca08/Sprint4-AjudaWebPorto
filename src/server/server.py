from flask import Flask, jsonify, request
from sp4 import *

# app instance
app = Flask(__name__)

@app.route("/api/cadastro-pessoa", methods=['POST'])
def cadastro_pessoa_web():
    conn, create_ist, read_ist, update_ist, delete_ist = get_dba

    dados_form = request.json

    cadastro_pessoa, status_code = cadastro_via_front_end(conn, dados_form, create_ist)

    if status_code == 200:
        return jsonify({'message': 'Pessoa cadastrada com sucesso', 'success': True}), 200
    else:
        return jsonify({'error': 'Não foi possível fazer o cadastro'}), 500
    



if __name__ == "__main__":
    app.run(debug=True)