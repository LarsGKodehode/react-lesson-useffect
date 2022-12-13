import { useState, useEffect } from "react";

/**
 * Create the fetch data function here
 */
async function getData(url, callback) {
  const response = await fetch(url)
  const data = await response.json();

  callback(data.results)
}


/**
 * Fetches data from some API and displays it
 */
function FetchData() {
  // Somewhere to store our data
  const [ fetchedData, setFetchedData ] = useState(null)
  const [ url, setUrl ] = useState("https://pokeapi.co/api/v2/pokemon")

  // Using .then for asynchronous
  // useEffect(
  //   () => {
  //     fetch("https://pokeapi.co/api/v2/pokemon")
  //       .then((respons) => {respons.json()})
  //       .then((data) => {setFetchedData(data.results)})

  //     return () => {
  //       // Code in here get run when this component gets removed from the DOM
  //     }
  //   },
  //   []
  // )
  
  // Using async await
  useEffect(
    () => {
      getData(url, setFetchedData)
    },
    []
  )
  

  return (
    <>
      <button onClick={() => getData(url, setFetchedData)}>Get New Data</button>

      <ul>
        {
        fetchedData &&
        fetchedData.map((pokemon, index) => {
          return (
            <li key={index}>{pokemon.name}</li>
          )
        })}
      </ul>
    </>
  )
}

export default FetchData;