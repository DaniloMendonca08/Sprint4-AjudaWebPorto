from flask import jsonify
import oracledb
import json
import pandas as pd
import brazilcep

# Inicialize a lista de clientes.
data = {}
def get_dba():
    
    try:
        dsn = oracledb.makedsn("oracle.fiap.com.br", "1521", "ORCL")
        conn = oracledb.connect(user="RM97696", password="080805", dsn=dsn)
        create_ist = conn.cursor()
        read_ist = conn.cursor()
        update_ist = conn.cursor()
        delete_ist = conn.cursor()
        print("Conectado ao banco de dados.....")
        return conn, create_ist, read_ist, update_ist, delete_ist
    except Exception as e:
        print("Não foi possível conectar aos nossos servidores ", e)
        return None

def verifica_cpf(conn, cpf):
    read_ist = conn.cursor()
    read_ist.execute(f"SELECT * FROM TB_CLIENTES WHERE cpf_cliente = '{cpf}'")
    existing_cpf = read_ist.fetchone()
    return existing_cpf

def get_cliente_data(conn, cpf):
    read_ist = conn.cursor()
    read_ist.execute(f"SELECT * FROM TB_CLIENTES WHERE cpf_cliente = '{cpf}'")
    return read_ist.fetchone()



def cadastro(conn, create_ist, update_ist):
    global data
    data['cpf'] = None  # Initialize cpf in case it's not found in the database
    cpf_cliente = input('CPF: ')
    data['cpf'] = cpf_cliente
    existing_cpf = get_cliente_data(conn, cpf_cliente)

    if existing_cpf:
        print("Bem-vindo de volta!")
        data['cpf'] = existing_cpf[1]
        data['nome'] = existing_cpf[2]
        data['nascimento'] = existing_cpf[3]
        data['telefone'] = existing_cpf[4]
        data['cep'] = existing_cpf[5]
        data['rua'] = existing_cpf[6]

        if data['cep'] is None:
            print("CEP não cadastrado. Por favor, faça o cadastro do CEP.")
            cep = input("Digite o CEP da sua residência: ")
            endereco = brazilcep.get_address_from_cep(cep)
            if endereco:
                data['cep'] = cep
                data['rua'] = endereco.get('street')
                data['bairro'] = endereco.get('district')
                data['cidade'] = endereco.get('city')

                # Atualize o registro do cliente com as informações do CEP
                sqlupdatecep = f"""UPDATE TB_CLIENTES SET cep_cliente = '{cep}', rua_cliente = '{endereco['street']}', bairro_cliente = '{endereco['district']}', cidade_cliente = '{endereco['city']}' WHERE cpf_cliente = '{data['cpf']}'"""
                update_ist.execute(sqlupdatecep)
                conn.commit()

                print('\nSeus Dados:')
                for chave, valor in data.items():
                    print(f'{chave}: {valor}')

                print("CEP cadastrado com sucesso.")
            else:
                print("ERRO... Não foi possível consultar o CEP.")
        else:
            pass

        try:
            UpdateConfirm = input("Deseja alterar algum dado? (S/N): ")
            if UpdateConfirm.lower() in ["s", "sim"]:
                update_users(conn, update_ist, data)
            else:
                print("Ok, seguiremos...")
        except Exception as e:
            print("Não foi possível ir para a aba de alteração:", e)
    else:
        try:
            print('Olá, por favor se cadastre.')
            data['Nome'] = input('Insira seu Nome Completo: ')
            data['Data De Nascimento'] = input("Insira Sua Data De Nascimento: ")
            data['Telefone'] = input("Insira seu telefone para contato: ")
            data['cep'] = input("Digite o CEP de sua Residencia: ")
            endereco = brazilcep.get_address_from_cep(data['cep'])
            if endereco:
                data['street'] = endereco.get('street')
                data['district'] = endereco.get('district')
                data['city'] = endereco.get('city')
            else:
                print("ERROR... Não conseguimos consultar o CEP...")
                return

            print('\nSeus Dados:')
            for chave, valor in data.items():
                print(f'{chave}: {valor}')

            cadastro = "INSERT INTO TB_CLIENTES (cpf_cliente, nome_cliente, birthday_cliente, telefone_cliente, cep_cliente, rua_cliente, bairro_cliente, cidade_cliente) " \
                       "VALUES (:cpf, :nome, :nascimento, :telefone, :cep, :rua, :bairro, :cidade)"
            create_ist.execute(cadastro, cpf=data['cpf'], nome=data['Nome'],
                               nascimento=data['Data De Nascimento'], telefone=data['Telefone'],
                               cep=data['cep'], rua=data['street'], bairro=data['district'],
                               cidade=data['city'])
            
            conn.commit()
            print("Cadastro feito com sucesso!")

            with open(f"data/users/{data['cpf']}_cliente.json", 'a+') as file:
                json.dump(data, file)

            print("Voltando para o menu principal...")
            try:
                UpdateConfirm = input("Deseja alterar algum dado? (S/N): ")
                if UpdateConfirm.lower() in ["s", "sim"]:
                    update_users(conn, update_ist, data)
            except Exception as e:
                print("Não foi possível ir para a aba de alteração:", e)
        except Exception as e:
            print("Erro durante o cadastro:", e)
            data = {}  # Limpe os dados em caso de erro para evitar "cpf" não definido

    return data

def cadastro_via_front_end(conn, form, create_ist):
    global data
    data['cpf'] = None  # Initialize cpf in case it's not found in the database
    data['cpf'] = form['clientData']['cpf']
    print("chegou aqui")
    existing_cpf = verifica_cpf(conn, form['clientData']['cpf'])

    if existing_cpf:
         mensagem = "Você ja é cadastrado!"
         data['cpf'] = existing_cpf[1]
         data['nome'] = existing_cpf[2]
         data['nascimento'] = existing_cpf[3]
         data['telefone'] = existing_cpf[4]
         data['cep'] = existing_cpf[5]
         data['rua'] = existing_cpf[6]
         response = {'message': mensagem, 'data': data}
         return (jsonify(response), 409)
    
    else:
        data['Nome'] = form['clientData']['nome']
        data['Data De Nascimento'] = form['clientData']['data_nascimento']
        data['Telefone'] = form['clientData']['telefone']
        data['Cep'] = form['clientData']['cep']
        data['Rua'] = form['clientData']['rua']
        data['Bairro'] = form['clientData']['bairro']
        data['Cidade'] = form['clientData']['cidade']

        cadastro = "INSERT INTO TB_CLIENTES (cpf_cliente, nome_cliente, birthday_cliente, telefone_cliente, cep_cliente, rua_cliente, bairro_cliente, cidade_cliente) " \
                       "VALUES (:cpf, :nome, :nascimento, :telefone, :cep, :rua, :bairro, :cidade)"
        create_ist.execute(cadastro, cpf=form['clientData']['cpf'], nome=form['clientData']['nome'],
                               nascimento=form['clientData']['data_nascimento'], telefone=form['clientData']['telefone'],
                               cep=form['clientData']['cep'], rua=form['clientData']['rua'], bairro=form['clientData']['bairro'],
                               cidade=form['clientData']['cidade'])
        conn.commit()
           
    return (jsonify(data), 200)



def update_users(conn, update_ist, data):
    try:
        IdUsersUpdate = int(input("Digite o ID do Cliente desejado para alteração: "))
        updateKey = input('Digite o nome do campo que deseja alterar (ex: Nome, Telefone, Cpf, Data de Nascimento): ')

        sqlfield = None

        if updateKey.lower() in ('nome', 'cpf', 'telefone', 'data de nascimento','cep','rua','bairro','cidade'):
            if updateKey.lower() == 'nome':
                sqlfield = "nome_cliente"
            elif updateKey.lower() == 'cpf':
                sqlfield = "cpf_cliente"
            elif updateKey.lower() == 'telefone':
                sqlfield = "telefone_cliente"
            elif updateKey.lower() == 'data de nascimento':
                sqlfield = 'birthday_cliente'
            elif updateKey.lower()== 'cep':
                sqlfield = 'cep_cliente'
            elif updateKey.lower() == 'rua':
                sqlfield = 'rua_cliente'
            elif updateKey.lower() == 'bairro':
                sqlfield = 'bairro_cliente'
            elif updateKey.lower() == 'cidade':
                sqlfield = 'cidade_cliente'    
            
            if sqlfield:
                newValue = input(f'Digite o novo {updateKey}: ')
                data[sqlfield] = newValue
                sqlCommand = f"""UPDATE TB_CLIENTES SET {sqlfield} = '{newValue}' WHERE id_clientes = {IdUsersUpdate}"""
                update_ist.execute(sqlCommand)
                conn.commit()
                print("\nDADOS ALTERADOS COM SUCESSO!")
            else:
                print(f"Campo '{updateKey}' não encontrado nos seus dados. Nenhum dado foi alterado.")
        else:
            print(f"Campo '{updateKey}' não encontrado nos seus dados. Nenhum dado foi alterado.")
    except Exception as e:
        print(f"ERROR Não foi possível alterar os dados. {e}")






def list_users(read_ist):
    try:
        read_ist.execute("SELECT * FROM TB_CLIENTES")
        users = read_ist.fetchall()
        if not users:
            print("Não possui cadastros...")
        else:
            df_users = pd.DataFrame(users, columns=['Id', 'Cpf', 'Nome', 'Data de Nascimento', 'Telefone','cep','rua','bairro','cidade'])
            print(df_users)
    except Exception as e:
        print("ERRO... Não foi possível listar nossos clientes", e)




def delete_users(conn, delete_ist):
    try:
        idDelete = int(input('Informe o ID do usuário a ser deletado: '))
        sqlCommand = f"DELETE FROM TB_CLIENTES WHERE id_clientes = :id"
        delete_ist.execute(sqlCommand, id=idDelete)
        conn.commit()
        print("Conta excluída com sucesso!")
    except Exception as e:
        print("Erro... Não foi possível deletar conta.", e)



def list_sinistros(read_ist):
    try:
        read_ist.execute("SELECT * FROM TB_SINISTROS")
        sinistros = read_ist.fetchall()
        if not sinistros:
            print("Não há sinistros registrados.")
        else:
            df_sinistros = pd.DataFrame(sinistros, columns=['ID Sinistro', 'Placa Veículo', 'Tipo de Eixo', 'Altura', 'Comprimento', 'Peso', 'Motivo', 'Material', 'Local','CPF' ,'Tipo de Sinistro','Guincho'])
            print(df_sinistros)
    except Exception as e:
        print("Erro ao listar sinistros:", e)

def cancelar_sinistro(conn, delete_ist,placa_sinistro):
    try:
        # Solicite ao usuário a placa do veículo do sinistro a ser cancelado
        placa_sinistro = input("Informe a placa do veículo do sinistro a ser cancelado: ")

        if verificar_existencia_sinistro(conn, placa_sinistro):
            sqlCommand = "DELETE FROM TB_SINISTROS WHERE placa_sinistro = :placa"
            delete_ist.execute(sqlCommand, placa=placa_sinistro)
            conn.commit()
            print("Sinistro com placa", placa_sinistro, "foi cancelado com sucesso!")
        else:
            print("Sinistro com placa", placa_sinistro, "não encontrado.")
    except Exception as e:
        print("Erro ao cancelar sinistro:", e)


def verificar_existencia_sinistro(conn, placa_sinistro):
    try:
        read_ist = conn.cursor()
        read_ist.execute("SELECT * FROM TB_SINISTROS WHERE placa_sinistro = :placa", placa=placa_sinistro)
        sinistro = read_ist.fetchone()
        return sinistro is not None
    except Exception as e:
        print("Erro ao verificar existência do sinistro:", e)
        return False

def sinistro(data, create_ist, conn, update_ist,cpf_cliente = None):
    if not cpf_cliente:
        cpf_cliente = input("Informe o CPF do cliente: ")

        # Check if the provided CPF exists in the database
        existing_cpf = get_cliente_data(conn, cpf_cliente)
        if not existing_cpf:
            print("CPF not found in the database. Please register or log in.")
            return

        print("Bem-vindo de volta!")
        data['cpf'] = existing_cpf[1]
        data['nome'] = existing_cpf[2]
        data['nascimento'] = existing_cpf[3]
        data['telefone'] = existing_cpf[4]
        data['cep'] = existing_cpf[5]
        data['rua'] = existing_cpf[6]

    placa_sinistro = input("Informe a placa de seu Veiculo: ")
    eixo_sinistro = input("Informe o tipo e quantidade de eixos: ")
    altura_sinistro = float(input("Informe a Altura do seu veiculo: "))
    comprimento_sinistro = float(input("Informe o comprimento: "))
    peso_sinistro = float(input("Informe o Peso total em kg: "))
    motivo_sinistro = input("Informe o motivo do chamado: ")
    material_sinistro = input("Informe o Material, Produto ou animal que está Transportando: ")
    local_sinistro = input("Informe o local do chamado (ex: BR-105 km 100.) :  ")
    tipo_sinistro = input("Informe o tipo de sinistro desejado, categorizado por carga como Tipo Perigo para cargas corrosivas ou inflamáveis, Tipo Animal para Cargas vivas e Tipo Peso para Materiais de peso: ")

    guincho_sinistro = 'Guincho'  # Defina um valor padrão para guincho_sinistro

    if peso_sinistro >= 1200 and peso_sinistro <= 2000:
        print("Levaremos o Guincho adequado para sua localização...\n Aguarde a Chegada do Guincho ...")
        guincho_sinistro = 'Guincho Leve'
    elif peso_sinistro >= 3500 and peso_sinistro <= 4000:
        print("Levaremos o Guincho adequado para sua localização...\n Aguarde a Chegada do Guincho ...")
        guincho_sinistro = 'Guincho Médio'
    elif peso_sinistro >= 8000 and peso_sinistro <= 18000:
        print("Levaremos o Guincho adequado para sua localização...\n Aguarde a Chegada do Guincho ...")
        guincho_sinistro = 'Guincho Pesado'

    cpf_cliente = input("Confirme a ultima vez seu CPF: ")
    cliente_data = get_cliente_data(conn, cpf_cliente)

   
    # if cliente_data:
    #     print("Bem-vindo de volta!")
    #     data['cpf'] = cliente_data[1]
    #     data['nome'] = cliente_data[2]
    #     data['nascimento'] = cliente_data[3]
    #     data['telefone'] = cliente_data[4]
    #     data['cep'] = cliente_data[5]
    #     data['rua'] = cliente_data[6]
    # else:
    #     print("Cliente não encontrado...")
    #     print("Por favor, cadastre-se")
    #     cadastro(conn, create_ist, update_ist)

    data = {
        'Placa': placa_sinistro,
        'Tipo de Eixo': eixo_sinistro,
        'Altura': altura_sinistro,
        'Comprimento': comprimento_sinistro,
        'Peso': peso_sinistro,
        'Motivo': motivo_sinistro,
        'Material': material_sinistro,
        'Local': local_sinistro,
        'Tipo de Sinistro': tipo_sinistro,
        'Guincho': guincho_sinistro,
        'CPF Cliente': cpf_cliente  # Adicione o CPF do cliente aos dados do sinistro
    }
    try:
        insert_sql = """
        INSERT INTO TB_SINISTROS (placa_sinistro, eixo_sinistro, altura_sinistro, comprimento_sinistro, peso_sinistro, motivo_sinistro, material_sinistro, local_sinistro, tipo_sinistro, guincho_sinistro, cpf_cliente)
        VALUES (:placa, :tipo_eixo, :altura, :comprimento, :peso, :motivo, :material, :local, :tipo_sinistro, :guincho_sinistro, :cpf_cliente)
        """

        create_ist.execute(insert_sql, placa=data['Placa'], tipo_eixo=data['Tipo de Eixo'],
                           altura=data['Altura'], comprimento=data['Comprimento'],
                           peso=data['Peso'], motivo=data['Motivo'], material=data['Material'],
                           local=data['Local'], tipo_sinistro=data['Tipo de Sinistro'],
                           guincho_sinistro=data['Guincho'], cpf_cliente=data['CPF Cliente'])

        conn.commit()
        print("Sinistro registrado com sucesso!")

        # Imprima um relatório com informações do cliente e do sinistro
        print("\nRelatório do Sinistro:")
        print(f"CPF do Cliente: {cpf_cliente}")
        print(f"Nome: {cliente_data[2]}")
        print(f"Data de Nascimento: {cliente_data[3]}")
        print(f"Telefone: {cliente_data[4]}")
        print(f"CEP: {cliente_data[5]}")
        print(f"Endereço: {cliente_data[6]}")
        print(f"Placa do Veículo: {data['Placa']}")
        print(f"Tipo de Eixo: {data['Tipo de Eixo']}")
        print(f"Altura: {data['Altura']}")
        print(f"Comprimento: {data['Comprimento']}")
        print(f"Peso: {data['Peso']}")
        print(f"Motivo: {data['Motivo']}")
        print(f"Material: {data['Material']}")
        print(f"Local: {data['Local']}")
        print(f"Tipo de Sinistro: {data['Tipo de Sinistro']}")
        print(f"Guincho: {data['Guincho']}")
        print("\nFim do Relatório")

        with open(f"data/sinistros/{placa_sinistro}_{tipo_sinistro}_sinistro.json", 'w') as file:
            json.dump(data, file)

    except Exception as e:
        print("Erro durante o registro do sinistro:", e)


def join_clientes_sinistros( conn,read_ist):
    try:
        # Realize uma junção (join) entre as tabelas TB_CLIENTES e TB_SINISTROS
        sql_query = """
        SELECT c.cpf_cliente, c.nome_cliente, c.birthday_cliente, s.id_sinistro, s.placa_sinistro
        FROM TB_CLIENTES c
        JOIN TB_SINISTROS s ON c.cpf_cliente = s.cpf_cliente
        """
        read_ist.execute(sql_query)
        resultado = read_ist.fetchall()

        if not resultado:
            print("Não há sinistros relacionados aos clientes.")
        else:
            df_resultado = pd.DataFrame(resultado, columns=['CPF Cliente', 'Nome Cliente', 'Data de Nascimento Cliente', 'ID Sinistro', 'Placa Veículo Sinistro'])
            print(df_resultado)

    except oracledb.DatabaseError as e:
        error, = e.args
        print("Erro ao realizar a junção das tabelas:", error.message)





def main_menu():
    conn, create_ist, read_ist, update_ist, delete_ist = get_dba()
    if not conn:
        return
    placa_sinistro = None  # Adicione estas linhas para inicializar os argumentos

    while True:
        print('********************************')
        print("Bem Vindo A TruckerCareTech... Como Posso Ajudar?")
        print('[1] Cadastro | Login')
        print('[2] Nossos Serviços')
        print('[3] Sair')
        print('********************************')
        y = int(input('Escolha > [1] [2] [3]'))

        if y == 1:
            usersMenu(conn, create_ist, read_ist, update_ist, delete_ist)

        elif y == 2:
            menuSinistro(data, create_ist, conn, delete_ist, read_ist, update_ist, placa_sinistro)  # Passe os argumentos aqui
        else:
            print('Programa encerrado!')
            break


def usersMenu(conn, create_ist, read_ist, update_ist, delete_ist):
    while True:
        print('**********************************')
        print('Menu de Nossos Assinantes...')
        print('[1] Criar Conta...')
        print('[2] Login...')
        print('[3] Listar Contas Cadastradas...')
        print('[4] Alterar meus dados...')
        print('[5] Excluir minha conta....')
        print('[6] Voltar para o Menu Principal...')
        print('*********************************')
        z = int(input('Escolha > [1][2][3][4][5][6]: '))
        if z == 1:
            cadastro(conn, create_ist, read_ist)
        elif z == 2:
            cadastro(conn, create_ist, read_ist)
        elif z == 3:
            list_users(read_ist)
        elif z == 4:
            update_users(conn, update_ist,data)
        
        elif z == 5:
            delete_users(conn,delete_ist)
        
        elif z == 6:
            main_menu()

        else:
            print("Opção inválida...")

def menuSinistro(data, create_ist, conn, delete_ist, read_ist, update_ist,placa_sinistro):
    print('********************************')
    print("TruckerCareTech Sinistros Como Posso Ajudar?")
    print("")
    print('[1] Chamar Sinistro.')
    print('[2] Chamados em andamento.')
    print('[3] Cancelar Sinistro')
    print('[4] Voltar para o menu Principal')
    print("")
    print('********************************')
    x = int(input('Escolha > [1] [2] [3] [4] : '))
    if x == 1:
        sinistro(data, create_ist, conn, update_ist)  # Passe os argumentos aqui
    elif x == 2:
        list_sinistros(read_ist)
    elif x == 3:
        cancelar_sinistro(conn, delete_ist, placa_sinistro)  # Passe os argumentos aqui
    elif x == 4:
        main_menu()
    elif x == 5:
        join_clientes_sinistros(conn, read_ist)




if __name__ == "__main__":
    main_menu()



