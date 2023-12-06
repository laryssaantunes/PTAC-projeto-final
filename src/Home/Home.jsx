import { Link } from "react-router-dom";
import Header from "../Components/Header"
import Card from "../Components/Card";

export default function Home() {
  const listinhamusic = JSON.parse(localStorage.getItem ("Lista")) || []

  return(
    <div> 
      <Header/>
      <Card listinhamusic ={listinhamusic}/>
    </div>
  );
}