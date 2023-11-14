"use client"

import { SetStateAction, useState } from "react"
import { StyledButtonCadastro, StyledDivCadastro, StyledDivCep, StyledInputCadastro, StyledLabelCadastro } from "./BodyCadastro.style"
import { Titulo } from "../Titulo/Titulo"

export const BodyCadastro = () => {

const [cpf,setCpf] = useState("")
const [nome,setNome] = useState("")
const [dataN, setDataN] = useState("")
const [telefone, setTelefone] = useState("")
const [cep, setCep] = useState("")
const [disabledButton, setDisabledButton] = useState(true)
const [address, setAddress] = useState<address>({
    state: '',
    city: '',
    neighborhood: '',
    street: ''
  });
const [isSearchingcep, setIsSearchingCep] = useState(false)

interface address {
    state: string,
    city: string,
    neighborhood: string,
    street: string,
}

const handleChangeCPF = (event: { target: { value: SetStateAction<string> } }) => {
    setCpf(event.target.value)
    
}

const handleChangeNome = (event: { target: { value: SetStateAction<string> } }) => {
    setNome(event.target.value)
}

const handleChangeDataNascimento = (event: { target: { value: SetStateAction<string> } }) => {
    setDataN(event.target.value)
}

const handleChangeTelefone = (event: { target: { value: SetStateAction<string> } }) => {
    setTelefone(event.target.value)
}

const handleChangeCep = (event: { target: { value: SetStateAction<string> } }) => {
    setCep(event.target.value)
    setDisabledButton(false)
}

const handleSearchCep = async () => {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        if (!response.ok) {
            if (response.status === 404) {
              alert('CEP não encontrado. Por favor, verifique o CEP e tente novamente.');
            } else {
              alert(`Erro na requisição: ${response.status}`);
            }
          }
        else {
            const options = await response.json()
            setIsSearchingCep(true)
            setDisabledButton(true)
            setAddress(options)
        }   
}

const handleSubmit = async ()=> {


    if (cpf && nome && dataN && telefone && cep) {
        const resposta = window.confirm("Precisa alterar algum dado?")

        if (resposta) {

        }
        else {
        const clientData = {
            'cpf': cpf,
            'nome': nome,
            'data_nascimento': dataN,
            'telefone': telefone,
            'cep': cep,
            'rua': address.street,
            'bairro': address.neighborhood,
            'cidade': address.city,
        }
    
        const url = 'http://127.0.0.1:5000/api/cadastro-pessoa'
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ clientData }),
          };
    
          const response = await fetch(url, requestOptions)
    
            if (response.ok) {
            const dados = await response.json();
            alert(dados.message); 
            
        }   else{
            const dados = await response.json();
            alert(dados.message);
        }
        }
    }
    else {
        alert('Você deve preencher todos os campos!')
    }
}

    return (
        <StyledDivCadastro>
            <Titulo titulo={"Cadastre-se"} />
            <StyledLabelCadastro htmlFor="cpf">CPF</StyledLabelCadastro>
            <StyledInputCadastro type="text" name="cpf" id="cpf" value={cpf} onChange={handleChangeCPF} required/>

            <StyledLabelCadastro htmlFor="nome">Nome</StyledLabelCadastro>
            <StyledInputCadastro type="text" name="nome" id="nome" value={nome} onChange={handleChangeNome} required/>

            <StyledLabelCadastro htmlFor="data_nascimento">Data de nascimento</StyledLabelCadastro>
            <StyledInputCadastro type="date" name="data_nascimento" id="data_nascimento" value={dataN} onChange={handleChangeDataNascimento} required/>

            <StyledLabelCadastro htmlFor="telefone">Telefone</StyledLabelCadastro>
            <StyledInputCadastro type="text" name="telefone" id="telefone" value={telefone} onChange={handleChangeTelefone} required/>

            <StyledDivCep>
                <StyledLabelCadastro htmlFor="cep">Cep</StyledLabelCadastro>
                <StyledInputCadastro type="text" name="cep" id="cep" value={cep} onChange={handleChangeCep} required/>
                <StyledButtonCadastro type="button" onClick={handleSearchCep} disabled={disabledButton}>Buscar cep</StyledButtonCadastro>
           </StyledDivCep>

            {isSearchingcep ? (
              <>
              <StyledLabelCadastro htmlFor="estado">Estado</StyledLabelCadastro>
              <StyledInputCadastro type="text" name="estado" id="estado" placeholder={address.state} disabled/>

              <StyledLabelCadastro htmlFor="cidade">Cidade</StyledLabelCadastro>
              <StyledInputCadastro type="text" name="cidade" id="cidade" placeholder={address.city} disabled/>

              <StyledLabelCadastro htmlFor="bairro">Bairro</StyledLabelCadastro>
              <StyledInputCadastro type="text" name="bairro" id="bairro" placeholder={address.neighborhood} disabled/>

              <StyledLabelCadastro htmlFor="rua">Rua</StyledLabelCadastro>
              <StyledInputCadastro type="text" name="rua" id="rua" placeholder={address.street} disabled/>

              <StyledButtonCadastro type="submit" onClick={handleSubmit}>Finalizar cadastro</StyledButtonCadastro>
              
              </>

                
          ) : null}
        </StyledDivCadastro>
    )
}
   