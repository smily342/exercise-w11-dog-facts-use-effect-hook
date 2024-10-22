// DogFact Component
export const DogFact = ({ fact }) => {
 // Render the fact if available, otherwise show a loading message
 return (
  <div>
    {fact ? <p>{fact}</p> : <p>Loading dog fact...</p>}
  </div>
);
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
