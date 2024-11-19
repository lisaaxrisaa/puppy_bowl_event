// import { useState } from "react";

// import { Provider } from "react-redux";
// import store from "./store/store";

// import PuppyDetails from "./features/puppies/PuppyDetails";
// import PuppyList from "./features/puppies/PuppyList";
// import PuppyForm from "./features/puppies/PuppyForm";

// import "./App.scss";

// /**
//  * @component
//  * This app shows a list of puppy bowl players from the API.
//  * Users can view players in the roster, add a player to the roster,
//  * see more details about a specific player, and remove a player from the roster.
//  */
// export default function App() {
//   const [selectedPuppyId, setSelectedPuppyId] = useState();

//   return (
//     <Provider store={store}>
//       <h1>Puppy Bowl</h1>
//       <PuppyForm />
//       <main>
//         <PuppyList setSelectedPuppyId={setSelectedPuppyId} />
//         <PuppyDetails
//           selectedPuppyId={selectedPuppyId}
//           setSelectedPuppyId={setSelectedPuppyId}
//         />
//       </main>
//     </Provider>
//   );
// }

import { useState } from 'react';
import PuppyDetails from './features/puppies/PuppyDetails';
import PuppyList from './features/puppies/PuppyList';
import PuppyForm from './features/puppies/PuppyForm';
import './App.scss';

export default function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState();
  const [removedPuppies, setRemovedPuppies] = useState([]);

  function removePuppy(id) {
    console.log('Removed Puppies:', removedPuppies);
    setRemovedPuppies((prev) => [...prev, id]);
    setSelectedPuppyId(null);
  }

  return (
    <>
      <div>
        <h1>Puppy Bowl</h1>
        <PuppyForm />
        <main>
          <PuppyList
            setSelectedPuppyId={setSelectedPuppyId}
            removedPuppies={removedPuppies}
          />
          <PuppyDetails
            selectedPuppyId={selectedPuppyId}
            setSelectedPuppyId={setSelectedPuppyId}
            removePuppy={removePuppy}
          />
        </main>
      </div>
    </>
  );
}

// console.log('PuppyList component is rendering');
