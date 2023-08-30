import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [currindex, setCurrindex] = useState(0);
  const countries = [
    {
      name: "Mexico",
      desc: "Mexico, a vibrant land of cultural fusion and natural beauty, beckons with warm hospitality and rich traditions. From pristine beaches to ancient ruins, it offers diverse landscapes. Tantalizing cuisine, festivals, and a colorful heritage await those seeking a new home, creating a tapestry of opportunity and adventure for emigrants.",
    },
    {
      name: "Gonduras",
      desc: "Honduras, a captivating Central American nation, welcomes emigrants with open arms. Its lush rainforests, stunning beaches, and Mayan ruins form a backdrop to a warm and diverse culture. Flavorful cuisine, vibrant festivals, and a tight-knit community invite those seeking a fresh start, promising a blend of excitement and new beginnings.",
    },
    {
      name: "El Salvador",
      desc: "El Salvador, a captivating Central American gem, embraces emigrants wholeheartedly. Its pristine beaches, lush landscapes, and ancient Maya heritage provide a scenic backdrop. With delectable cuisine, lively festivities, and a close-knit society, it offers newcomers a chance for a vibrant restart, weaving together novelty and opportunity in a rich cultural tapestry.",
    },
    {
      name: "Colombia",
      desc: "Colombia, a South American jewel, extends a warm embrace to emigrants. Its diverse terrain, from lush rainforests to bustling cities, sets a captivating stage. Culinary delights, vibrant celebrations, and a rich heritage await those seeking a fresh chapter, promising a mosaic of possibilities and cultural immersion in a land of endless discovery.",
    },
    {
      name: "Serbia",
      desc: "Serbia, a Balkan treasure in Europe, opens its doors to emigrants with genuine warmth. Its rolling landscapes, historic cities, and resilient spirit create an inviting backdrop. Rich cuisine, lively traditions, and a strong sense of community await those seeking a new journey, offering a blend of opportunity and cultural enrichment in a land with a storied past and promising future.",
    },
  ];
  const country = countries[currindex];

  return (
    <div className="container">
      <Header setCurrindex={setCurrindex} />
      <Content countries={countries} index={currindex} />
      <p>{country.desc}</p>
      <Content />
      <Footer />
    </div>
  );
};

export default App;
