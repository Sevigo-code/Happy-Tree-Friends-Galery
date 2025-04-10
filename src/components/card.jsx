import './styles/card.css';

function Card({ characters }) {
    if (!characters || characters.length === 0) {
      return <p>No characters found</p>;
    }
  
    return (
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <h3>{character.name}</h3>
            <img src={character.src} alt={character.name} width="300" height="350px" />  
            <div>
              <p className='comments'>{character.comment}</p>  
              
            </div>    
          </div>     
        ))}
      </div>
    );
  }
  
  export default Card;