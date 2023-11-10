import { SetStateAction, useState } from "react"
import { StyledButtonCadastro, StyledDivCadastro, StyledLabelCadastro } from "./BodyCadastro.style"
import { Titulo } from "../Titulo/Titulo"

export const BodyCadastro = () => {

const [cpf,setCpf] = useState("")
const [nome,setNome] = useState("")
const [dataN, setDataN] = useState("")
const [telefone, setTelefone] = useState("")
const [cep, setCep] = useState("")
const [disabledButton, setDisabledButton] = useState(false)
const [address, setAddress] = useState({})
const [isSearchingcep, setIsSearchingCep] = useState(false)

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
    setDisabledButton(true)
}

const handleSearchCep = async () => {
      try {
        setIsSearchingCep(true)
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        const options = await response.json()
        setAddress(options)
      } catch (error) {
        alert(`Deu ruim:  ${error}`)
      } 
  }

    return (
        <StyledDivCadastro>
            <Titulo titulo={"Cadastre-se"} />
            <StyledLabelCadastro htmlFor="cpf">CPF</StyledLabelCadastro>
            <input type="text" name="cpf" id="cpf" value={cpf} onChange={handleChangeCPF} />

            <StyledLabelCadastro htmlFor="nome">Nome</StyledLabelCadastro>
            <input type="text" name="nome" id="nome" value={nome} onChange={handleChangeNome} />

            <StyledLabelCadastro htmlFor="data_nascimento">Data de nascimento</StyledLabelCadastro>
            <input type="date" name="data_nascimento" id="data_nascimento" value={dataN} onChange={handleChangeDataNascimento} />

            <StyledLabelCadastro htmlFor="telefone">Telefone</StyledLabelCadastro>
            <input type="text" name="telefone" id="telefone" value={telefone} onChange={handleChangeTelefone} />

            
            <StyledLabelCadastro htmlFor="cep">Cep no formato:12345123</StyledLabelCadastro>
            <input type="text" name="cep" id="cep" value={cep} onChange={handleChangeCep}/>

           <StyledButtonCadastro onClick={handleSearchCep} disabled={!Boolean(disabledButton)}>Buscar cep</StyledButtonCadastro>

            {isSearchingcep ? (
              <>
              <StyledLabelCadastro>Estado: {address.state}</StyledLabelCadastro>
              <StyledLabelCadastro>Cidade: {address.city}</StyledLabelCadastro>
              <StyledLabelCadastro>Bairro: {address.neighborhood}</StyledLabelCadastro>
              <StyledLabelCadastro>Rua: {address.street}</StyledLabelCadastro>
              </>

                
          ) : null}
        </StyledDivCadastro>
    )
}
   