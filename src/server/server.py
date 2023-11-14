from flask import Flask, jsonify, request
from flask_cors import CORS
from sprint4 import *

# app instance
app = Flask(__name__)
CORS(app)

@app.route("/api/cadastro-pessoa", methods=['POST', 'OPTIONS'])
def cadastro_pessoa_web():

    if request.method == 'OPTIONS':
        # Responde à requisição OPTIONS com os cabeçalhos CORS necessários
        return '', 200

    db_values = get_dba()

    if db_values:
            conn, create_ist, read_ist, update_ist, delete_ist = db_values
            dados_form = request.json

            cadastro_pessoa, status_code = cadastro_via_front_end(conn, dados_form, create_ist)

            if status_code == 200:
                return jsonify({'message': 'Pessoa cadastrada com sucesso', 'success': True}), 200
            elif status_code == 409:
                 return jsonify({'message': 'Você ja possui cadastro', 'success': True}), 409
            else:
                return jsonify({'error': 'Não foi possível fazer o cadastro'}), 500
    



if __name__ == "__main__":
    app.run(debug=True)