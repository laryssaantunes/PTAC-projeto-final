import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Cadastrar.css';

export default function Cadastrar() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista") || []);
  const [lista, setLista] = useState(listaLocalStorage ) ;
  const [id, setId] = useState(1);
  const [Nome, setNome] = useState([listaLocalStorage.length -1]?.id + 1 || 1);
  const [Imagem, setImagem] = useState("");
  const [Idade, setIdade] = useState("");
 


  useEffect(()=> {localStorage.setItem("Lista", JSON.stringify(lista))}, [lista]);

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Musica: Musica, descriao: descricao, Imagem: Imagem }]);
    setId(id + 1);
    setMusica("");
    setImagem("");
    setdescricao("");
    setExibirMensagem(true); 
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <h1>Informe dados da sua música favorita</h1>
      <form onSubmit={salvar}>
        <div className="input-container">
          <label htmlFor="nome">Musica:</label>
          <input
            id="Musica"
            className="border-input"
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={Nome}

          />
          <label htmlFor="descricao">Idade:</label>
          <input
            id="descricao"
            className="border-input"
            onChange={(e) => setIdade(e.target.value)}
            type="text"
            value={Idade}
          />

          <label htmlFor="Imagem">Imagem:</label>
          <input
            id="Imagem"
            className="border-input"
            onChange={(e) => setImagem(e.target.value)}
            type="text"
            value={Imagem}
          />

          <button className="button">add</button>
        </div>
      </form>

      <div>
        <div className="values-area">
          {lista.map((item) => (
            <div key={item.id}>

              <Link to={`/detalhe/${item.id}`}>
              <p>Musica: {item.Musica}</p>
              <p>descricao: {item.descricao}</p>
              <img src= {item.Imagem} alt="" class= "imagem" />
              </Link>
              <button className=".button" onClick={() => remover(item.id)}>Remover</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}