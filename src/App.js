
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

  const [personagens, setPersonagens] = useState([
    {
      id: uuidv4(),
      nome: 'Daenerys Targaryen',
      cargo: 'Rainha Legitima',
      imagem: 'https://i.pinimg.com/originals/ba/d3/50/bad350be54b0b1b130e886a973d5465a.jpg',
      filiacao: 'Casa Targaryen',
    },
    {
      id: uuidv4(),
      nome: 'Drogon',
      cargo: 'Dragão de Daenerys',
      imagem: 'https://i.pinimg.com/originals/30/0e/00/300e00431fbc0e45707c8703216b5900.jpg',
      filiacao: 'Casa Targaryen',
    },
    {
      id: uuidv4(),
      nome: 'Jon Snow',
      cargo:'Comandante',
      imagem:'https://i.pinimg.com/originals/4d/19/bf/4d19bfd3882a8a9b7c86dd5f6ded9c16.jpg',
      filiacao: 'A Muralha'
    },
    {
      id: uuidv4(),
      nome: 'Aemon Targaryen',
      cargo:'Meistre de Castle Black',
      imagem:'https://i.pinimg.com/originals/12/42/81/1242813f9430d6ab7acc432135257cfa.jpg',
      filiacao: 'A Muralha'
    },
    {
      id: uuidv4(),
      nome:'Cersei Lannister',
      cargo:'Rainha Regente',
      imagem:'https://i.pinimg.com/originals/cc/a9/a4/cca9a4723feabeedf020199fbf292dcd.jpg',
      filiacao:'Casa Lannister'
    },
    {
      id: uuidv4(),
      nome:'Jaime Lannister',
      cargo:'Comandante da Guarda Real',
      imagem:'https://i.pinimg.com/originals/0a/79/f6/0a79f6ed4b9c2c23f52b6e0b5d8a33f4.jpg',
      filiacao:'Casa Lannister'
    },
    {
      id: uuidv4(),
      nome:'Sansa Stark',
      cargo:'Rainha do Norte',
      imagem:'https://i.pinimg.com/originals/1c/6c/a2/1c6ca2eb3f902644ba5126ced4256c99.png',
      filiacao:'Casa Stark'
    },
    {
      id: uuidv4(),
      nome:'Robb Stark',
      cargo:'Rei Autoproclamado',
      imagem:'https://i.pinimg.com/originals/9d/3c/6f/9d3c6f598d7f87fdbe95b0ab9eb6f49c.jpg',
      filiacao:'Casa Stark'
    },
    {
      id: uuidv4(),
      nome:'Stannis Baratheon',
      cargo:"Rei Autoproclamado",
      imagem:'https://i.pinimg.com/originals/a9/c9/c9/a9c9c97226b4c462e04c13c399494f99.jpg',
      filiacao:'Casa Baratheon'
    },
    {
      id: uuidv4(),
      nome:'Melissandre',
      cargo:"Feiticeira vermelha",
      imagem:'https://i.pinimg.com/originals/94/73/bb/9473bb260ac6aaa2e9332e6f7291beec.jpg',
      filiacao:'Casa Baratheon'
    },
    {
      id: uuidv4(),
      nome: 'Margaery Tyrell',
      cargo: 'Rainha Prometida',
      imagem:'https://i.pinimg.com/originals/30/d7/40/30d740f883086bfa48684dd11abc67d7.jpg',
      filiacao:'Casa Tyrell'
    },
    {
      id: uuidv4(),
      nome: 'Loras Tyrell',
      cargo: 'Cavaleiro',
      imagem:'https://i.pinimg.com/originals/20/65/c7/2065c73c95a033d66dd62a2eae6b0df9.jpg',
      filiacao:'Casa Tyrell'
    },
    {
      id: uuidv4(),
      nome:'Balon Greyjoy',
      cargo:'Lorde de Pyke',
      imagem: 'https://i.pinimg.com/originals/04/e5/36/04e536ea85c3683dd47ac1ffaa7ffe45.png',
      filiacao: 'Casa Greyjoy'
    },
    {
      id: uuidv4(),
      nome:'Euron Greyjoy',
      cargo:'Rei das ilhas de Ferro',
      imagem: 'https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/extra-globo-com/incoming/21580757-e54-01e/w448h673-PROP/game-of-thrones-6x5_euron_promo-.jpg',
      filiacao: 'Casa Greyjoy'
    }
  ]);

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

  function cadastrarFiliacao(novaFiliacao) {
    setFiliacoes([...filiacoes, { ...novaFiliacao, id: uuidv4() }])
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
        cadastrarFiliacao={cadastrarFiliacao}
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
