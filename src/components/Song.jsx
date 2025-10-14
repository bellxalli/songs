import Ratings from "./Ratings"
import GrammyStatus from "./GrammyWinner"

export default function Song(props){
console.log("isGrammyWinner prop:", props.isGrammyWinner);

    return(
        <div className="album-card">
            <h3> {props.title} </h3>
            <h4> By {props.artist} </h4>
            <p> The album was released in {props.year}. </p>
            <GrammyStatus isGrammyWinner={props.isGrammyWinner}/>
            <Ratings rating={props.rating} />
            <ul> {props.genres.map((s, index) => <li key={index}>{s}</li>)} </ul>
        </div>
    )
}

export function Link(){

    if(props.link){

            return <p> This album is a Grammy winner! </p>
        }



}
