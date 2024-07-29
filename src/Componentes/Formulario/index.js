import "./Formulario.css"
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do personagem" />
                <CampoTexto label="Cargo" placeholder="Digite o cargo do personagem" />
                <CampoTexto label="Imagem" placeholder="Insira o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario