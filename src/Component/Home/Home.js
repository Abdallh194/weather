import React, { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  let [search, setSearch] = useState(null);
  let [city, setCity] = useState("");
  let [contry, setContry] = useState("");
  let API_KEY = "a4b758443a85b69a00d8ee30e06aef76";
  // let API_LINK =
  //   "http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44";
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setLocation(res.data));
  // });
  let [Res_City, setRes_City] = useState("");
  let [Res_Temp, setRes_Temp] = useState("");
  let [Res_Fell, setRes_Fell] = useState("");
  let [Res_humidity, sethumidity] = useState("");
  let [Res_Contry, setRes_Contry] = useState("");
  let [serach_Res, setSerach_Res] = useState(null);
  let [Res_Desc, setRes_Desc] = useState("");
  let [Res_WindSpeed, setRes_WindSpeed] = useState("");
  let handlesearch = async (e) => {
    if (city.length > 0) {
      setSearch(true);
      const API = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${contry}&appid=${API_KEY}`
      );
      const Data = await API.json();
      if (Data) {
        setRes_City(Data.name);
        setRes_Temp(Data.main.temp);
        setRes_Fell(Data.main.feels_like);
        sethumidity(Data.main.humidity);
        setRes_Contry(Data.sys.country);
        setRes_Desc(Data.weather[0].description);
        setRes_WindSpeed(Data.wind.speed);
        console.log(Data);
        setSerach_Res(true);
      } else {
        setSerach_Res(null);
      }
    } else {
      setSearch(false);
    }
  };
  let date = new Date();
  let hours = date.getHours();
  let mint = date.getMinutes();
  if (hours > 12) {
    hours = hours - 12 + "PM";
  } else {
    hours = hours + "AM";
  }
  if (mint < 10) {
    mint = "0" + mint;
  } else {
    mint = mint;
  }
  let fulltime = hours + " : " + mint;

  return (
    <div className="Home">
      <h1 className="head">Weather Today</h1>
      <input
        type="text"
        placeholder="Enter City Name"
        className="form-control"
        onChange={(e) => setCity(e.target.value)}
      />
      {/* <input
        type="text"
        placeholder="Enter City Name"
        className="form-control"
        onChange={(e) => setContry(e.target.value)}
      /> */}
      <button className="btn btn-primary btn-block" onClick={handlesearch}>
        Search
      </button>
      {search && serach_Res ? (
        <div>
          <div className="result">
            <h1>weather now</h1>
            {/* <div className="time">{fulltime}</div> */}
            <div className="deGDESC">
              <h1 className="temp">
                {Number(Res_Temp / 13).toFixed(1)}
                <sup> C</sup>{" "}
              </h1>
              <h5 className="desc">{Res_Desc}</h5>
              <div className="feel">
                fell like :{Number(Res_Fell / 13).toFixed(1)}
              </div>
            </div>

            <div className="cityname">
              <i className="bi bi-geo"></i> {Res_City} : {Res_Contry}
            </div>
            <div className="time">Time Now : {fulltime}</div>
          </div>
          <div className="footer">
            <div className="wind">
              <i class="bi bi-wind"></i> Wind Speed <p>{Res_WindSpeed} km/h</p>
            </div>
            <div className="hum">
              <i class="bi bi-droplet-half"></i> humidity{" "}
              <p>{Res_humidity} %</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
