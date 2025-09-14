import React, { useState } from "react";
import Login from "./components/Login";
import UserTable from "./components/UserTable";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <UserTable setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
