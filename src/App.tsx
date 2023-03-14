import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { Cats } from "./data/catModel";
import { catsData } from "./data/cats-data";
import { useState } from "react";
import CatCard from "./components/cats_card";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!
  catsData.forEach((cat) => (cat.id = uuidv4()));
  const [catLibrary, setCatLibrary] = useState<Cats>(catsData);

  //   const ImageFetcher = () => {
  //     let catImage = "";
  //     fetch("https://api.thecatapi.com/v1/images/search")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         catImage = data[0].url;
  //       });
  //     console.log(catImage);
  //     return catImage;
  //   };

  return (
    <>
      <Navbar />
      <Header numberOfCats={catLibrary.length} />

      <main>
        <div className='cards__wrapper'>
          {catLibrary.map((cat, index) => (
            <CatCard key={cat.id} cat={cat} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
