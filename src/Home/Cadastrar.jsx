import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function Cadastrar() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista") || []);
  const [lista, setLista] = useState(listaLocalStorage ) ;
  const [id, setId] = useState([listaLocalStorage.length -1]?.id + 1 || 1);
  const [Video, setVideo] = useState("");
  const [descricao, setdescricao] = useState("");
  const [quantidadedelike, setquantidadedelike] = useState("");
  const [Datadepostagens, Data] = useState("");
  const [Nomedocanal, nome] = useState("");


  useEffect(()=> {localStorage.setItem("Lista", JSON.stringify(lista))}, [lista]);

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Video: Video, descriao: descricao, quantidadedelike: like, Datadepostagens: Data, Nomedocanal: nome }]);
    setId(id + 1);
    setVideo("");
    setquantidadedelike("");
    setData("");
    setnome("");
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
          <label htmlFor="Descricao">descrição:</label>
          <input
            id="descricao"
            className="border-input"
            onChange={(e) => setIdade(e.target.value)}
            type="text"
            value={descricao}
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

          <label htmlFor="Nomedocanal">Nome do canal</label>
          <input
            id="nome"
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