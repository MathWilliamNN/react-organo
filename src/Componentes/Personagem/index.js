import './personagem.css'

const Personagem = ({nome, cargo, imagem, corDeFundo}) => {

    return (
        <div className='personagem'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>   
                <img src={imagem} alt = ""></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Personagem