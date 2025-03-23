import React, {memo} from 'react';

function CharacterCard({character}) {
    return (
        <div className="character">
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
        </div>
    );
}

const MemoizedCharacterCard = memo(CharacterCard);

function CharacterCards({characters, loading}) {
    if (loading && characters.length === 0) {
        return <p>Loading characters...</p>;
    }

    return (
        <div className="characters">
            {characters.map((character) => (
                <MemoizedCharacterCard key={character.id} character={character}/>
            ))}
            {loading && <p>Loading more characters...</p>}
        </div>
    );
}

export default CharacterCards;