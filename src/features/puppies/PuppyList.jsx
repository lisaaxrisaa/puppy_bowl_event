/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */

// import React from 'react';
import { useGetPlayersQuery } from './puppySlice';

export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query

  const { data: players = [], isLoading, error } = useGetPlayersQuery();
  const puppies = players.players;
  if (isLoading) {
    return <p>Loading puppies...</p>;
  }
  if (error) {
    return <p>Failed to load puppies</p>;
  }
  console.log(puppies);
  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading players...</li>}
        {puppies.map((p) => (
          <li key={p.id}>
            <h3>
              {p.name} #{p.id}
            </h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button onClick={() => setSelectedPuppyId(p.id)}></button>
          </li>
        ))}
      </ul>
    </article>
  );
}
