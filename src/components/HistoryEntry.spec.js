import { render, screen } from '@testing-library/react';
import HistoryEntry from './HistoryEntry';
import userEvent from '@testing-library/user-event';

describe('HistoryEntry tests', () => {
  it('renders name of game and "show score" button', () => {
    render(
      <HistoryEntry
        nameOfGame="Dodelino"
        players={[
          {
            name: 'John',
            score: 2,
            id: 'xyz',
          },
          {
            name: 'Jane',
            score: 3,
            id: 'xyz2',
          },
        ]}
      />
    );

    // Exercise 2:
    // get name of game and button and check that they are present
  });

  it('renders player names after button click', () => {
    render(
      <HistoryEntry
        nameOfGame="Dodelino"
        players={[
          {
            name: 'John',
            score: 32,
            id: 'xyz',
          },
          {
            name: 'Jane',
            score: 33,
            id: 'xyz2',
          },
        ]}
      />
    );

    const player1 = screen.queryByText(/john/i);
    const player2 = screen.queryByText(/jane/i);
    const playerScore1 = screen.queryByText(/32/i);
    const playerScore2 = screen.queryByText(/33/i);

    expect(player1).not.toBeInTheDocument();
    expect(player2).not.toBeInTheDocument();
    expect(playerScore1).not.toBeInTheDocument();
    expect(playerScore2).not.toBeInTheDocument();

    const button = screen.getByRole('button', { name: /show score/i });
    userEvent.click(button);

    // Exercise 4:
    // Check that player names and scores are visible
  });
});
