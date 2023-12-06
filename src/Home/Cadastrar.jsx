import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Cadastrar.css';

export default function Cadastrar() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista") || []);
  const [lista, setLista] = useState(listaLocalStorage ) ;
  const [id, setId] = useState([listaLocalStorage.length -1]?.id + 1 || 1);
  const [Imagem, setImagem] = useState("");
  const [descricao, setdescricao] = useState("");
  const [Musica, setMusica] = useState("");


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
      <Link to="/">Voltatr para o página inicial</Link>
      <h1>Informe dados da sua música favorita</h1>
      <form onSubmit={salvar}>
        <div className="input-container">

          <label htmlFor="nome">Video:</label>
          <input
            id="Video"
            className="border-input"
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={Video}

          />
          <label htmlFor="Descricao">Descrição:</label>
          <input
            id="descricao"
            className="border-input"
            onChange={(e) => setIdade(e.target.value)}
            type="text"
            value={Descricao}
          />

          <label htmlFor="like">Contidade de like:</label>
          <input
            id="like"
            className="border-input"
            onChange={(e) => setImagem(e.target.value)}
            type="text"
            value={like}
          />

          <label htmlFor="Data">Data de postagens:</label>
          <input
            id="Data"
            className="border-input"
            onChange={(e) => setImagem(e.target.value)}
            type="text"
            value={Data}
          />

          <label htmlFor="Nomedocanal">Nome do canal:</label>
          <input
            id="Nomedocanal"
            className="border-input"
            onChange={(e) => setImagem(e.target.value)}
            type="text"
            value={Nomedocanal}
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