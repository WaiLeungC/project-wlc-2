import { useEffect, useState } from 'react';
import AddFruitForm from './AddFruitForm.tsx';
import api from '../api.tsx';

interface Fruit {
  name: string;
}

const FruitList = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  const fetchFruits = async () => {
    try {
      const response = await api.get('/fruits');
      setFruits(response.data);
    } catch (error) {
      console.error("Error fetching fruits", error);
    }
  };

  const addFruit = async (fruitName: string) => {
    try {
      await api.post('/fruits', { name: fruitName });
      fetchFruits();
    } catch (error) {
      console.error("Error adding fruit", error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits && fruits.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
      <AddFruitForm addFruit={addFruit} />
    </div>
  );
};

export default FruitList;
