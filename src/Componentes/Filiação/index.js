import Personagem from "../Personagem"
import "./filiacao.css"
import hexToRgba from 'hex-to-rgba';

const Filiação = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, '0.3') }
    return (
        (props.personagens.length > 0) && 
        <section className="filiacao" style={css}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type="color" className="input-cor"></input>
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className="personagens">
            {props.personagens.map(personagem => 
                {
                    return (
                    <Personagem 
                    corDeFundo = {props.cor}
                    key={personagem.nome}
                    nome={personagem.nome}
                    cargo={personagem.cargo}
                    imagem={personagem.imagem}
                    aoDeletar={props.aoDeletar}
                    id={personagem.id}
                    // aoFavoritar ={props.aoFavoritar}
                    ></Personagem>)
                })}
            </div>
        </section>
    )
}

export default Filiação
