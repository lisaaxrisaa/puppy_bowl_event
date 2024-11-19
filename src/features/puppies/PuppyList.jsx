/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */

// import React from 'react';
import { useGetPlayersQuery } from './puppySlice';

export default function PuppyList({ setSelectedPuppyId, removedPuppies }) {
  // TODO: Get data from getPuppies query

  const { data: players = {}, isLoading, error } = useGetPlayersQuery();
  // const puppies = players.players;
  const puppies = players?.data?.players || [];

  // useEffect(() => {
  //   console.log('Players updated:', players);
  //   console.log('Puppies Array:', puppies);
  // }, [players]);
  // console.log('API Response (players):', players);
  // console.log('Puppies Array:', puppies);
  // console.log(players);

  const visiblePuppies = puppies.filter(
    (puppy) => !removedPuppies.includes(puppy.id)
  );

  console.log('Removed Puppies:', removedPuppies); // Debugging removed state
  console.log('Visible Puppies:', visiblePuppies);

  if (isLoading) {
    return <p>Loading puppies...</p>;
  }
  if (error) {
    return <p>Failed to load puppies</p>;
  }
  // console.log(puppies);
  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {/* {isLoading && <li>Loading players...</li>} */}
        {visiblePuppies.map((p) => (
          <li key={p.id}>
            <h3>
              {p.name} #{p.id}
            </h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button
              onClick={() => {
                // console.log('Selected Puppy ID:', p.id);
                setSelectedPuppyId(p.id);
              }}
            >
              Click for Puppy Info
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
