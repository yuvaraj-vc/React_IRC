import Parenprops from "./Parenprops";

const Childprops=(props)=>
{
    return(
        <>
        <h1>I'm {props.name}</h1>
        <p>email {props.email}</p>
        </>
    )
}
export default Childprops;