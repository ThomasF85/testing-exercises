import { useState } from 'react';
import styled from 'styled-components';

export default function HistoryEntry({ nameOfGame, players }) {
  const [showScore, setShowScore] = useState(false);

  return (
    <Wrapper>
      <GameTitle>{nameOfGame}</GameTitle>
      <button onClick={() => setShowScore(!showScore)}>
        {showScore ? 'hide score' : 'show score'}
      </button>
      {showScore &&
        players.map(({ name, score, id }) => (
          <Player key={id}>
            <span>{name}</span>
            <span>{score}</span>
          </Player>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GameTitle = styled.span`
  text-transform: uppercase;
  font-weight: lighter;
`;
