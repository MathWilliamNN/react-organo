import "./Formulario.css"
import Campo from '../Campo';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao"
import { useState } from "react"

const Formulario = (props) => {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [filiacao, setFiliacao] = useState('');
    const [nomeFiliacao, setNomeFiliacao] = useState('');
    const [corFiliacao, setCorFiliacao] = useState('#000000');

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
                <Campo
                 obrigatorio={true}
                 label="Nome"
                 type='text'
                 placeholder="Digite o nome do personagem..." 
                 valor = {nome}
                 aoAlterado = {valor => setNome(valor)}/>
                <Campo
                 obrigatorio={true}
                 label="Cargo"
                 type='text'
                 placeholder="Digite o cargo do personagem..." 
                 valor = {cargo}
                 aoAlterado = {valor => setCargo(valor)}/>
                <Campo
                 label="Imagem"
                 type='text'
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
            <form onSubmit={(evento) => {
                evento.preventDefault();
                props.cadastrarFiliacao({nome: nomeFiliacao, cor: corFiliacao})}
            }>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <Campo
                 obrigatorio
                 label="Nome"
                 type='text'
                 placeholder="Digite o nome da filiação..." 
                 valor = {nomeFiliacao}
                 aoAlterado = {valor => setNomeFiliacao(valor)}/>
                <Campo
                 obrigatorio
                 label="Cor"
                 type = 'color'
                 placeholder="Defina a cor da filiação" 
                 valor = {corFiliacao}
                 aoAlterado = {valor => setCorFiliacao(valor)}/>
                <Botao> Criar Filiação</Botao>
            </form>
        </section>

    )
}

export default Formulario