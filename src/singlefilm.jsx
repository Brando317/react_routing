import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";


function Singlefilm() {

let [film, setFilm] = useState({})
let {id} = useParams()
useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films/"+id) .then(res => res.json()) .then(data => setFilm(data));




},[])


return (
    <h1> {film.title} </h1>
)
}

export default Singlefilm