import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import { useEffect, useState, useRef } from "react";
import Button from "./Button";
import Description from "./Description";
import ListCharCards from "./ListCharCards";
import Pagination from "./Pagination";
import ListLocationCards from "./ListLocationCards";

function App() {
  const [charPageNumber, setCharPageNumber] = useState(1);
  const [locationPageNumber, setLocationPageNumber] = useState(1)
  const [detailsIsShown, setSeeDescription] = useState(true);
  const [charsAreShown, setSeeChars] = useState(false);
  const [locationsAreShown, setSeeLocations] = useState(false);

  const [items, setItems] = useState([])
  let hasMore = useRef(true);

  const characters = useCharacters(charPageNumber);
  const locations = useLocations(locationPageNumber);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      
      if (scrollTop + clientHeight === scrollHeight && hasMore.current) {
        setCharPageNumber(charPageNumber+1);
      }
    }

    console.log("Characters data: ");
    console.log(characters);
    console.log("Locations data: ");
    console.log(locations);
    if (characters !== "Loading...") {
      if (charPageNumber !== 1 && characters.results[characters.results.length-1].name !== items[items.length-1].name) {
        setItems((prevState) => [...prevState, ...characters.results]);
      } else if (charPageNumber === 1) {
        setItems(characters.results)
      }
      hasMore.current = characters.info.next !== null
      console.log(hasMore)
    };
    window.addEventListener('scroll', onScroll);
    return () => {window.removeEventListener('scroll', onScroll); console.log("test")}
  }, [charPageNumber, characters, locations])


  const handleClick = (btnText) => {
    if (btnText === "Characters") {
      setSeeChars(true);
      setSeeDescription(false);
      setSeeLocations(false);
    } else if (btnText === "Locations") {
      setSeeChars(false);
      setSeeDescription(false);
      setSeeLocations(true);
    }
  }

  const changePage = (pageNo) => {
    if (charsAreShown) {
      setCharPageNumber(pageNo);
    } else if (locationsAreShown) {
      setLocationPageNumber(pageNo);
    }
  }

  return (
    <div className="mt-5 container" data-testid="app">
      <img className="img-fluid" src="./logo.png" alt="logo"></img>
      <div className="d-flex flex-direction-row justify-content-evenly mt-5 flex-wrap">
        <Button text="Characters" handleClick={handleClick} />
        <Button text="Locations" handleClick={handleClick} />
      </div>
      {detailsIsShown &&
        <Description
          text="An animated series that follows the exploits of a super scientist and his not-so-bright grandson."
        />}
      {detailsIsShown &&
        <Description
          text="Click to see the characters or the locations"
        />
      }
      {charsAreShown && <ListCharCards characters={items} />}
      {charsAreShown && hasMore.current && <div style={{height: "100px"}}><div className="loader-line mb-5"></div></div>}
      {/* {charsAreShown && <Pagination noOfPages={characters.info.pages} currentPage={charPageNumber} changePage={changePage}/>} */}
      {locationsAreShown && <ListLocationCards locations={locations.results} />}
      {locationsAreShown && <Pagination noOfPages={locations.info.pages} currentPage={locationPageNumber} changePage={changePage} />}
    </div>
  );
}

export default App;
