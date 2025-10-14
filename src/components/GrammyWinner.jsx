export default function GrammyWinner(props){

        if(props.isGrammyWinner)
        {
            return(
                <p> This album is a Grammy winner! </p>
            ) 
        } 
        else 
        {

            return(
                <p> This album is not a Grammy winner, but it's won people's hearts! </p>
            ) 
        }
}