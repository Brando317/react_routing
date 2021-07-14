import { useEffect, useState } from "react";


function People() {


    let [list, setList] = useState([]);
    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/people") .then(res => res.json()) .then(data => setList(data))}, []);
    

    return (
    <ul>
        {list.map((people) => <li key={people.id}> { people.title} </li>)}
    </ul>
        
    )
}

export default People