import axios from 'axios';
import { useEffect } from 'react';

export default function Options({optionType}){
    const [items, setItems] = useState([]);

    //optionType is 'scoops' or 'toppings'
    useEffect(()=>{
        axios
        .get(`http://localhost:3030/${optionType}`)
        .then((responce) => setItems(response.data))
        .catch((error) => {
            //TODO: handle erros response
        });
    }, [optionType]);

    return <div />

};
