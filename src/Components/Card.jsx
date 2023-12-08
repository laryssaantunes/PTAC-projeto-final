import { Link } from "react-router-dom";

export default function Card({ listinhamusic }) {
  return (
    <div>
      {listinhamusic.map((video) => (
        <div className="card">
          <div className="produto-card" key={video.id}>
            <Link to={`/detalhe/${video.id}`}>
              <p> {video.Video}</p>
            </Link>
            <img></img>
            <iframe
              width="500"
              height="500"
              src={"https://www.youtube.com/embed/" + video.link.slice(17)}
              frameborder="0"
              allow="acelerometer; autoplay; cliphoard-white; encrypted-media"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
