import Ratings from "./Ratings"
import GrammyStatus from "./GrammyWinner"

export default function Song(props){

    const handleClick = () => {
        if (props.link) window.open(props.link, "_blank");
    }

    return(
        <div className="album-card" onClick={handleClick} style={{ cursor: props.link ? "pointer" : "default" }}>
            <h3> {props.title} </h3>
            <h4> By {props.artist} </h4>
            <p> The album was released in {props.year}. </p>
            <GrammyStatus isGrammyWinner={props.isGrammyWinner}/>
            <Ratings rating={props.rating} />
            <ul> {props.genres.map((s, index) => <li key={index}>{s}</li>)} </ul>
        </div>
    )
}