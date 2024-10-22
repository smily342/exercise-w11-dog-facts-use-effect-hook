// Import required  hooks
import { useEffect, useState } from "react";

import { DogFact } from "./components/DogFact";

export const App = () => {
  const [fact, setFact] = useState(null);  // Initialize state for storing the dog fact
  const apiEndpoint = "https://dogapi.dog/api/v2/facts";  // Define the API endpoint

 // Function to fetch the dog fact
 const fetchDogFact = () => {
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      setFact(data.data[0].attributes.body);  // Extract the 'body' from 'attributes' of the first fact
    })
    .catch((error) => console.error("Error fetching dog fact:", error));
};

  // Hint: Initialize state for storing the dog fact
  // Hint: Define the API endpoint
  // Hint: Create a function to fetch the dog fact
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

// Use the useEffect hook to fetch the dog fact when the component mounts
useEffect(() => {
  fetchDogFact();
}, []);


  return (
    <div className="App">
      <DogFact fact={fact}/>  {/* Pass the 'fact' as a prop to DogFact component */}
      </div>
  );
};
