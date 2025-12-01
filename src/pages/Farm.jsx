import { useState, useEffect } from 'react';
import {getAnimals} from '../services/animalsApi.js';

export default function Farm() {
    const [animals, setAnimals] = useState([]);

//Callback
    useEffect(() => {
        const fechAnimals = async () => {
            try {
                const data = await getAnimals();
                console.log(data);
                console.log(data);

                setAnimals(data);
            } catch (error) {
            console.error("Error fetching animals:", error);    
            }
        };
        fechAnimals
    }, []);

    return (
        <div>
            <h2>Welcome to the Farm Page</h2>
        </div>
    );
}