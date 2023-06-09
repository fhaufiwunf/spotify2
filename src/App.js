// import React from "react";
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ShopPage from "./pages/ShopPage";
// import LoginPage from "./pages/LoginPage";
// import CartPage from "./pages/CartPage";
// import Login from "./Todo/Login";




// function App() {

//   return (
//     // <Routes>
//     //   <Route path="/" element={<HomePage />} >home</Route>
//     //   <Route path="/shop" element={<ShopPage />} >shop</Route>
//     //   <Route path="/login" element={<LoginPage />} >login</Route>
//     //   <Route path="/cart" element={<CartPage />} >cart</Route>


//     // </Routes>
//     // <Routes>
//     //   <Route path="/" element={<Login/>}></Route>
//     //   <Route path="/All" element={<Login/>}></Route>
//     //   <Route path="/active" element={<Login/>}></Route>
//     //   <Route path="/completed" element={<Login/>}></Route>
      
//     // </Routes>
    
    


//   );
// }

// export default App

import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./login";

const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;