export default function Ratings(props)
{
    if(props.rating)
    {
        return(
            <p>This album has been rated {props.rating}!</p>
        )
    }
    else
    {
        return(
            <p>This album has not been rated.</p>
        )
    }
}