import Personagem from "../Personagem"
import "./filiacao.css"

const Filiação = (props) => {
    return (

        (props.personagens.length > 0) && 
        <section className="filiacao" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="personagens">
            {props.personagens.map(personagem => <Personagem 
                corDeFundo = {props.corPrimaria}
                key={personagem.nome}
                nome={personagem.nome}
                cargo={personagem.cargo}
                imagem={personagem.imagem}></Personagem>)}
            </div>
        </section>
    )
}

export default Filiação