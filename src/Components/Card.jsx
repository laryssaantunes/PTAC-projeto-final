export defauf function Card((lista)){
    return (
        lista.map((Video))=> (
            <div className= "card">
            <div class= "produto-card" key= {video.id}
            
            <Link to={`/detalhe/${item.id}`}>
            <p> {video.pessoa}</p>
            </Link>
            <img></img>
            <iframe
            width="500"
            height="500"
            src={
            "https://www.youtube.com/embed/" + video.link.slice(17)}
        frameborder= "0"
        allow= "acelerometer; autoplay; cliphoard-white; encrypted-media">
        </iframe>       
            </div>
        )
    )
}