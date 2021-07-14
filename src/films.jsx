import { useEffect, useState } from "react";


function Films() {

    let [list, setList] = useState([]);
    useEffect(()=>{
fetch("https://ghibliapi.herokuapp.com/films") .then(res => res.json()) .then(data => setList(data));


    }
    , []
    )
    


    return (
        <ul>   
{ list.map(film => <li key={film.id}> { film.title} </li>)}

        </ul>
    )
}

export default Films 