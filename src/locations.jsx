import { useEffect, useState } from "react";

function Locations() {

    let [list, setList] = useState([]);
    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/films") .then(res => res.json()) .then(data => setList(data));
        
    }        
     , []      
    )
    
    return (
<ul> 
{ list.map((locations) => <li key={locations.id}> { locations.title} </li>)}
</ul>


        
    )

}

export default Locations