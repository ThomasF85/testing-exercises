import { render, screen } from '@testing-library/react';
import GameForm from './GameForm';
import userEvent from '@testing-library/user-event';

describe('GameForm tests', () => {
  it('renders name of game input and a button', () => {
    render(<GameForm />);

    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const playerNamesInput = screen.getByLabelText(
      /player names, separated by comma/i
    );
    const submitButton = screen.getByRole('button', { name: /create/i });

    expect(playerNamesInput).toBeInTheDocument();
    expect(nameOfGameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  // Exercise 1:
  // Check for an input with the label text: "player names, separated by comma"

  it('submits form data when every field is filled out', () => {
    const handleCreate = jest.fn();
    render(<GameForm onCreateGame={handleCreate} />);

    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const playerNamesInput = screen.getByLabelText(/player names/i);
    const submitButton = screen.getByRole('button', { name: /create/i });

    userEvent.type(nameOfGameInput, 'Dodelino');
    userEvent.type(playerNamesInput, 'Jane, John');
    userEvent.click(submitButton);

    expect(handleCreate).toHaveBeenCalledWith({
      nameOfGame: 'Dodelino',
      playerNames: ['Jane', 'John'],
    });
  });
});
