import { Link } from "react-router-dom";
import Header from "./Compoments/Header"
import Card from "./Componentes/Card";

export default function Home() {
  const listinhamusic = JSON.parse(localStorage.getItem ("Lista")) || []

  return(
    <div> 
      <Header/>
      <Card listinhamusic ={listinhamusic}/>
    </div>
  )
  
  );
}