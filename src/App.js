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
    {
      name: "France",
      desc: "France, a European gem, beckons emigrants with its rich culture and history. From the romantic streets of Paris to scenic countryside, it offers diverse landscapes. World-renowned cuisine, art, and a high quality of life await those seeking a new adventure.",
      continent: "Europe",
    },
    {
      name: "Germany",
      desc: "Germany, in the heart of Europe, welcomes emigrants with its strong economy and rich heritage. From vibrant cities to picturesque villages, it offers a blend of modernity and tradition. Quality education, efficient healthcare, and a high standard of living make it an attractive destination.",
      continent: "Europe",
    },
    {
      name: "Spain",
      desc: "Spain, a European paradise, invites emigrants with its sunny climate and vibrant culture. From historic cities to beautiful coasts, it offers a diverse lifestyle. World-famous cuisine, festivals, and a laid-back atmosphere promise a unique experience for those seeking a new home.",
      continent: "Europe",
    },
    {
      name: "Italy",
      desc: "Italy, a European jewel, embraces emigrants with its art, history, and culinary delights. From ancient Rome to charming villages, it offers a rich cultural experience. World-famous cuisine, art, and a warm sense of community welcome those seeking a Mediterranean lifestyle.",
      continent: "Europe",
    },
    {
      name: "Russia",
      desc: "Russia, the largest country in the world, offers emigrants a diverse experience. From the historic streets of Moscow to the wild Siberian landscapes, it promises adventure. Rich culture, history, and a unique way of life await those seeking a new journey.",
      continent: "Europe",
    },
    {
      name: "Japan",
      desc: "Japan, an Asian gem, beckons emigrants with its blend of tradition and modernity. From historic temples to bustling cities, it offers a unique lifestyle. Culinary delights, technological innovation, and a respectful society welcome those seeking a cultural immersion.",
      continent: "Asia",
    },
    {
      name: "China",
      desc: "China, a rising global power, extends an invitation to emigrants with its dynamic economy and rich heritage. From ancient landmarks to modern cities, it offers diverse opportunities. Cultural diversity, business prospects, and a sense of adventure await those seeking a fresh start.",
      continent: "Asia",
    },
    {
      name: "India",
      desc: "India, a vibrant nation in South Asia, beckons emigrants with its rich culture and history. From the Himalayas to bustling cities, it offers diverse experiences. Colorful festivals, spirituality, and a warm community welcome those seeking a transformative journey.",
      continent: "Asia",
    },
    {
      name: "South Korea",
      desc: "South Korea, a dynamic Asian nation, embraces emigrants with its modernity and tradition. From high-tech cities to serene temples, it offers a unique blend of experiences. Innovative technology, cuisine, and a strong sense of community promise a fresh start.",
      continent: "Asia",
    },
    {
      name: "Thailand",
      desc: "Thailand, a Southeast Asian paradise, welcomes emigrants with its tropical beauty and vibrant culture. From exotic islands to bustling markets, it offers a diverse lifestyle. Scenic landscapes, spicy cuisine, and a relaxed atmosphere invite those seeking a new adventure.",
      continent: "Asia",
    },
    {
      name: "Canada",
      desc: "Canada, a North American gem, beckons emigrants with its stunning natural landscapes and welcoming culture. From pristine lakes to multicultural cities, it offers a diverse experience. High quality of life, education, and friendly communities await those seeking a new beginning.",
      continent: "North America",
    },
    {
      name: "USA",
      desc: "The USA, a land of opportunity, invites emigrants with its diverse landscapes and entrepreneurial spirit. From iconic cities to breathtaking national parks, it offers a range of experiences. Innovation, higher education, and cultural diversity promise new possibilities for those seeking a fresh start.",
      continent: "North America",
    },
    {
      name: "Brazil",
      desc: "Brazil, a South American treasure, extends an invitation to emigrants with its Amazon rainforest and vibrant culture. From samba to soccer, it offers a dynamic way of life. Natural beauty, festivals, and a warm spirit welcome those seeking a Latin American adventure.",
      continent: "South America",
    },
    {
      name: "Argentina",
      desc: "Argentina, a South American gem, beckons emigrants with its diverse landscapes and rich culture. From the Andes to tango, it offers a blend of experiences. World-famous cuisine, dance, and a welcoming society promise a unique journey.",
      continent: "South America",
    },
    {
      name: "Chile",
      desc: "Chile, a South American paradise, welcomes emigrants with its stunning scenery and friendly culture. From the Atacama Desert to Patagonia, it offers natural wonders. Wine, outdoor adventures, and a sense of community invite those seeking a fresh start.",
      continent: "South America",
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
