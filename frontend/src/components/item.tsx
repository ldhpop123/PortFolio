import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './item.css'

interface Item {
    id: number,
    src: string,
    name: string
}

export default function Item () {
    const { id } = useParams();
    const [item, setItem] = useState<Item | null>(null);

    useEffect(() =>{
    const fetchItem = async () => {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/portfolio-items/${id}`);
            
            console.log('response data', res.data)
            setItem(res.data);
        } catch(err) {
            console.error(err);
        }
    };
    fetchItem();
    }, [id]);

    return (
        <>
            <section className="itemContainer">
                {item ? ( 
                    <>
                        <img src={item.src} alt="" />
                        <p>{item.name}</p>
                    </>
                ) : (
                    <p>loding</p>
                )}
            </section>
        </>
    )
}
