import { render, screen } from '@testing-library/react';
import GameForm from './GameForm';

describe('GameForm tests', () => {
  it('renders name of game input and a button', () => {
    render(<GameForm />);

    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const submitButton = screen.getByRole('button', { name: /create/i });

    expect(nameOfGameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  // Exercise 1:
  // Check for an input with the label text: "player names, separated by comma"
});
