export default function Ratings(props)
{
    if(props.ratings)
    {
        return(
            <p>This album has been rated {props.ratings}!</p>
        )
    }
    else
    {
        return(
            <p>This album has not been rated.</p>
        )
    }
}