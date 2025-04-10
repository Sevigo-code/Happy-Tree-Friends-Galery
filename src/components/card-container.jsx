import Card from "./card.jsx";

function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
