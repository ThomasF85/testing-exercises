import Button from './Button';
import Input from './Input';
import styled from 'styled-components';
import { useState } from 'react';

const initialFormData = {
  nameOfGame: '',
  playerNames: '',
};

export default function GameForm({ onCreateGame }) {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <Form
      aria-labelledby="formHeader"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 id="formHeader">Create a new game</h2>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. Dodelido"
        onChange={handleChange}
        value={formData.nameOfGame}
        required
      />
      <Input
        name="playerNames"
        labelText="Player names, seperated by comma"
        placeholder="e.g. John Doe, Jane Doe"
        onChange={handleChange}
        value={formData.playerNames}
        required
      />
      <Button>Create game</Button>
    </Form>
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onCreateGame({
      nameOfGame: formData.nameOfGame,
      playerNames: formData.playerNames.split(',').map(name => name.trim()),
    });
    setFormData(initialFormData);
  }
}

const Form = styled.form`
  display: grid;
  gap: 10px;
`;
