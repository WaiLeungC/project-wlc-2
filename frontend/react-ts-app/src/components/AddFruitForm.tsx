import { useState, FormEvent, ChangeEvent } from 'react';

interface AddFruitFormProps {
  addFruit: (fruitName: string) => void;
}

const AddFruitForm = ({ addFruit }: AddFruitFormProps) => {
  const [fruitName, setFruitName] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fruitName) {
      addFruit(fruitName);
      setFruitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={fruitName}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFruitName(e.target.value)}
        placeholder="Enter fruit name"
      />
      <button type="submit">Add Fruit</button>
    </form>
  );
};

export default AddFruitForm;
