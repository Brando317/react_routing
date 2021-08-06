import { useEffect, useState } from "react";

function Locations() {

    let [list, setList] = useState([]);
    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/locations") .then(res => res.json()) .then(data => setList(data));
        
    }        
     , []      
    )
    
    return (
<ul> 
{ list.map((locations) => <li key={locations.id}> { locations.name} </li>)}
</ul>


        
    )

}

export default Locations