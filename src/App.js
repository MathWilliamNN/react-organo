
import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Filiação from './Componentes/Filiação';

function App() {

  const filiacoes = [{
    nome: 'Casa Baratheon',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9',
  },
  {
    nome: 'A Muralha',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Casa Greyjoy',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Casa Targaryen',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'Casa Stark',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  },
  {
    nome: 'Casa Tyrell',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
  },
  {
    nome: 'Casa Lannister',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  }];

  const [personagens, setPersonagens] = useState([]);

  const aoNovoPersonagemAdicionado = (personagem) => {
    console.log(personagem);
    setPersonagens([...personagens, personagem]);

  }
  return (
    <div className="App">
      <Banner />
      <Formulario filiacoes={filiacoes.map(filiacao => filiacao.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)} />
      {filiacoes.map(filiacao => <Filiação
        key={filiacao.nome} 
        nome={filiacao.nome}
        corPrimaria={filiacao.corPrimaria}
        corSecundaria={filiacao.corSecundaria}
        personagens = {personagens.filter(personagem => personagem.filiacao === filiacao.nome)} ></Filiação>)}
    </div>
  );
}

export default App;
