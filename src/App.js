
import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Filiação from './Componentes/Filiação';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [filiacoes, setFiliacoes] = useState([{
    nome: 'Casa Baratheon',
    cor: '#57C278',
    id: uuidv4()
  },
  {
    nome: 'A Muralha',
    cor: '#82CFFA',
    id: uuidv4()
  },
  {
    nome: 'Casa Greyjoy',
    cor: '#A6D157',
    id: uuidv4()
  },
  {
    nome: 'Casa Targaryen',
    cor: '#E06B69',
    id: uuidv4()
  },
  {
    nome: 'Casa Stark',
    cor: '#DB6EBF',
    id: uuidv4()
  },
  {
    nome: 'Casa Tyrell',
    cor: '#FFBA05',
    id: uuidv4()
  },
  {
    nome: 'Casa Lannister',
    cor: '#FF8A29',
    id: uuidv4()
  }]);

  const [personagens, setPersonagens] = useState([]);

  const aoNovoPersonagemAdicionado = (personagem) => {
    console.log(personagem);
    personagem.id = uuidv4();
    // personagem.favorito = false;
    setPersonagens([...personagens, personagem]);
  }

  function deletarColaborador(id) {
    setPersonagens(personagens.filter(personagem => personagem.id !== id));
  }

  function mudarCorDaFiliacao(cor, id) {
    setFiliacoes(filiacoes.map(filiacao => {
      if (filiacao.id === id) {
          filiacao.cor = cor;
      }
      return filiacao;
    }))
  }

  function cadastrarFiliacao(novaFiliacao){
    setFiliacoes([...filiacoes, {...novaFiliacao, id: uuidv4()}])
  }

  // function resolverFavorito(id) {
  //   setPersonagens(personagens.map(personagem => {
  //     if (personagem.id === id) {
  //       console.log(personagem.favorito)
  //       return { ...personagem, favorito: !personagem.favorito };
  //     }
  //     return personagem;
  //   }));
  // }

   return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarFiliacao = {cadastrarFiliacao}
        filiacoes={filiacoes.map(filiacao => filiacao.nome)}
        aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}
      />
      {filiacoes.map(filiacao =>
        <Filiação
          key={filiacao.nome}
          id={filiacao.id}
          nome={filiacao.nome}
          cor={filiacao.cor}
          personagens={personagens.filter(personagem => personagem.filiacao === filiacao.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDaFiliacao}
          // aoFavoritar={resolverFavorito}
        ></Filiação>)}
    </div>
  );
}

export default App;
