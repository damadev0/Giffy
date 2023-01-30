import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';

export function useGifs({ keyword, limit }) {
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([])
    
    useEffect(() => {
        setLoading(true)
        getGifs({ keyword, limit })
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword, limit])    //? Why limit on dependencies needed

    return {loading, gifs};
}
