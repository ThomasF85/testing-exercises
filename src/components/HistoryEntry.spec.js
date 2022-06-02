import { render, screen } from '@testing-library/react';
import HistoryEntry from './HistoryEntry';

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
});
