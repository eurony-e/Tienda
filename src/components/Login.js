import React, { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (correo === "admin@gmail.com" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Inicio de Sesión
      </h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          className="w-full p-2 mb-4 border rounded"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
