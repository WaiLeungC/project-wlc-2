import { useState, FormEvent, ChangeEvent } from 'react';

type AddFruitFormProps = {
  addFruit: (fruitName: string) => void
};

const AddFruitForm = ({ addFruit }: AddFruitFormProps) => {
  const [fruitName, setFruitName] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fruitName) return;
    addFruit(fruitName);
    setFruitName('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFruitName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={fruitName}
        onChange={handleChange}
        placeholder="Enter fruit name"
      />
      <button type="submit">Add Fruit</button>
    </form>
  );
};

export default AddFruitForm;
