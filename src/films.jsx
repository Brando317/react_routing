import { useEffect, useState } from "react";
import { Link} from "react-router-dom";


function Films() {

    let [list, setList] = useState([]);

    useEffect(()=>{
fetch("https://ghibliapi.herokuapp.com/films") .then(res => res.json()) .then(data => setList(data));


    }
    , []
    )
    


    return (
        <ul>   
{ list.map(film => <li key={film.id}> <Link to={"/films/"+film.id}> { film.title } </Link> </li>)}

        </ul>
    )
}

export default Films 