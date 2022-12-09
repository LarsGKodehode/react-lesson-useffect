import { useState, useEffect } from "react";

/**
 * Fetches data from some API and displays it
 */
function FetchData() {
  // Somewhere to store our data
  const [ fetchedData, setFetchedData ] = useState(null)

  // Using .then for asynchronous
  // useEffect(
  //   () => {
  //     fetch("https://pokeapi.co/api/v2/pokemon")
  //       .then(respons => respons.json())
  //       .then(data => setFetchedData(data.results))

  //     return () => {
  //       // Code in here get run when this component gets removed from the DOM
  //     }
  //   },
  //   []
  // )
  
  // Using async await
  useEffect(
    () => {
      async function getData() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await response.json();

        setFetchedData(data.results)
      }

      getData()
    },
    []
  )
  

  return (
    <ul>
      {
      fetchedData &&
      fetchedData.map((pokemon, index) => {
        return (
          <li key={index}>{pokemon.name}</li>
        )
      })}
    </ul>
  )
}

export default FetchData;