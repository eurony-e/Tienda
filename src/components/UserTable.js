import React from "react";

const fakeUsers = [
  { id: 1, nombre: "Juan", correo: "juan@gmail.com" },
  { id: 2, nombre: "María", correo: "maria@gmail.com" },
  { id: 3, nombre: "Pedro", correo: "pedro@gmail.com" },
];

function UserTable({ setIsLoggedIn }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        Bandeja de Usuarios
      </h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Correo</th>
          </tr>
        </thead>
        <tbody>
          {fakeUsers.map((user) => (
            <tr key={user.id}>
              <td className="border p-2 text-center">{user.id}</td>
              <td className="border p-2">{user.nombre}</td>
              <td className="border p-2">{user.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        onClick={() => setIsLoggedIn(false)}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default UserTable;
