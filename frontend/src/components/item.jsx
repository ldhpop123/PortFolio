import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './item.css'

export default function Item () {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() =>{
    const fetchItem = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/portfolio-items/${id}`);
            console.log('response data', res.data)
            console.log('src', res.data.src)
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
                <img src={item.src} alt="" />
                <p>{item.name}</p>
                {/* json으로 가져올 부분 */}
            </section>
        </>
    )
}
