export default function Song(props){

    return(

        <div>

            <h3> {props.title} </h3>
            <h4> By {props.artist} </h4>
            <p> The album was released in {props.year}. </p>

            <ul> {props.genres.map((s, index) => <li key={index}>{s}</li>)} </ul>


        </div>

    )

}