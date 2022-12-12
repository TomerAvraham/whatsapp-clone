import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { SOCKET_URL } from "./constants/constants";

const socket = io(SOCKET_URL);

const App = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("User connect to socket");
    });
  }, []);

  return <div>App</div>;
};

export default App;
