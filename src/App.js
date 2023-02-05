import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
//axios genelde useEffectle beraber kullanıldığı için useStatein yanına onu da ekledim.
import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Nasa from "./components/nasa";

const dummy_data = {
  copyright: "Michael Carrol",
  date: "2023-02-05",
  explanation:
    "This moon is shining by the light of its planet. Specifically, a large portion of Enceladus pictured here is illuminated primarily by sunlight first reflected from the planet Saturn. The result is that the normally snow-white moon appears in the gold color of Saturn's cloud tops.  As most of the illumination comes from the image left, a labyrinth of ridges throws notable shadows just to the right of the image center, while the kilometer-deep canyon Labtayt Sulci is visible just below. The bright thin crescent on the far right is the only part of Enceladus directly lit by the Sun. The featured image was taken in 2011 by the robotic Cassini spacecraft during a close pass by by the enigmatic moon.  Inspection of the lower left part of this digitally sharpened image reveals plumes of ice crystals thought to originate in a below-surface sea.",
  hdurl: "https://apod.nasa.gov/apod/image/2302/enceladus12_cassini_960.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Enceladus by Saturnshine",
  url: "https://apod.nasa.gov/apod/image/2302/enceladus12_cassini_960.jpg",
};

function App() {
  const [data, setData] = useState(dummy_data);
  const [tarih, setTarih] = useState("2023-02-02");
  const changeHandler = (e) => {
    setTarih(e);
  };

  {
    /*bu fonksiyon gelen tarihi tarih stateine ekleyecek*/
  }
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + tarih)
      .then((res) => {
        {
          setData(res.data);
        }
      });
  }, [tarih]);
  return (
    <div className="App">
      <Header />
      <Search changeHandler={changeHandler} tarih={tarih} />{" "}
      {/*yukarıda tanımladığımız tarihi prop olarak Search e göndereceğim. süslü parantez içerisindeki tarih App.jsin içindeki App componentinin tarihi*/}
      <Nasa data={data} />
    </div>
  );
}

export default App;
