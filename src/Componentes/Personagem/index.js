import './personagem.css';
import { IoIosCloseCircle } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Personagem = ({ nome, cargo, imagem, corDeFundo, aoDeletar, id, favorito, aoFavoritar }) => {
  return (
    <div className='personagem'>
      <IoIosCloseCircle 
        size={35} 
        className='deletar' 
        onClick={() => { aoDeletar(id) }}
      />
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        {/* <div className='favoritar'>
          {favorito
            ? <FaHeart size={25} onClick={() => aoFavoritar(id)} />
            : <CiHeart size={25} onClick={() => aoFavoritar(id)} />}
        </div> */}
      </div>
    </div>
  );
}

export default Personagem;
