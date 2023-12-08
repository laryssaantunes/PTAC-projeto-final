import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css';

export default function Cadastrar() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista") || []);
  const [lista, setLista] = useState(listaLocalStorage ) ;
  const [id, setId] = useState([listaLocalStorage.length -1]?.id + 1 || 1);
  const [Video, setVideo] = useState("");
  const [descricao, setdescricao] = useState("");
  const [Quantidadedelike, setQuantidadedelike] = useState("");
  const [Datadepostagens, setDatadepostagens] = useState("");
  const [Nomedocanal, setNomedocanal] = useState("");


  useEffect(()=> {localStorage.setItem("Lista", JSON.stringify(lista))}, [lista]);

  const navigate = useNavigate();



  async function salvar(e) {
    e.preventDefault();
    await setLista([...lista, { id: id, Video: Video, descriao: descricao, Quantidadedelike: Quantidadedelike , Datadepostagens: Datadepostagens, Nomedocanal: Nomedocanal }]);
    setId(id + 1);
    navigate("/")
    setVideo("");
    setdescricao("")
    setQuantidadedelike("");
    setDatadepostagens("");
    setNomedocanal("");
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
            onChange={(e) => setVideo(e.target.value)}
            type="text"
            value={Video}

          />
          <label htmlFor="Descricao">descrição:</label>
          <input
            id="descricao"
            className="border-input"
            onChange={(e) => setdescricao(e.target.value)}
            type="text"
            value={descricao}
          />

          <label htmlFor="like">Quantidadedelike:</label>
          <input
            id="like"
            className="border-input"
            onChange={(e) => setQuantidadedelike(e.target.value)}
            type="text"
            value={Quantidadedelike}
          />

          <label htmlFor="Data">Datadepostagens:</label>
          <input
            id="Data"
            className="border-input"
            onChange={(e) => setDatadepostagens(e.target.value)}
            type="text"
            value={Datadepostagens}
          />

          <label htmlFor="Nomedocanal">Nomedocanal</label>
          <input
            id="nome"
            className="border-input"
            onChange={(e) => setNomedocanal(e.target.value)}
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