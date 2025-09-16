import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './list.css'


export default function List() {
    const [items, setItems] = useState([]);
    const navigator = useNavigate();

    useEffect(() =>{
        const fetchItems = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/portfolio-items`);
                console.log('response data', res.data)
                setItems(res.data);
            } catch(err) {
                console.error(err);
            }
        };
        fetchItems();
    }, []);

    return (
        <section className='listUpGrid'>
            {items.map((item) => {
                console.log(item);
                return (
                    <div className='GridItem' key={item.id} 
                    onClick={(e) => navigator(`/items/${item.id}`)}
                    >
                        <img src={item.src} alt={item.name}/>
                        <p>{item.name}</p>
                    </div>
                );
            })}
        </section>
    );
}
