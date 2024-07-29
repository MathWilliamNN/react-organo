import "./Formulario.css"
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao"
import { useState } from "react"

const Formulario = (props) => {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [filiacao, setFiliacao] = useState('')

const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoPersonagemCadastrado({nome, cargo, imagem, filiacao})
    setNome('');
    setCargo('');
    setImagem('');
    setFiliacao('');
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <CampoTexto
                 obrigatorio={true}
                 label="Nome"
                 placeholder="Digite o nome do personagem..." 
                 valor = {nome}
                 aoAlterado = {valor => setNome(valor)}/>
                <CampoTexto
                 obrigatorio={true}
                 label="Cargo"
                 placeholder="Digite o cargo do personagem..." 
                 valor = {cargo}
                 aoAlterado = {valor => setCargo(valor)}/>
                <CampoTexto
                 label="Imagem"
                 placeholder="Insira o endereço da imagem..."
                 valor = {imagem}
                 aoAlterado = {valor => setImagem(valor)} />
                <ListaSuspensa 
                 obrigatorio={true}
                 label = "Filiação"
                 itens = {props.filiacoes}
                 valor={filiacao}
                 aoAlterado = {valor => setFiliacao(valor)}
                 />
                <Botao> Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario