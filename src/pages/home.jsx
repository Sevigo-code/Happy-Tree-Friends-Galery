import "./styles/home.css";
import Card from "../components/card.jsx";

function Home({ characters }) {
  return (
    <div className="home">
      <header>
        <h1 id="back">Do you remember Happy Tree Friends?</h1>
      
        <p>If you watched this as a kid, I know you do.<br />
        Find everything related to them here on this website!</p>
      </header>

      <div>
        <h1>Characters</h1>

        {/*<ul>
          {characters.length > 0 ? (
            characters.map((character) => (
              <li key={character.id}>{character.name}</li>
            ))
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </ul>*/}

        <Card characters={characters} />

      </div>
    </div>
  );
}

export default Home;

