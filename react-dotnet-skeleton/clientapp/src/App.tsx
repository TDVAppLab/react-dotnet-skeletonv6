import React from 'react';
import Login from './Account/Login';
import Register from './Account/Register';
import { WeatherForecast } from './WeatherForecast';

function App() {
  return (
    <div>
      <Login />
      <hr />
      <Register />
      <hr />
      <WeatherForecast />
    </div>
  );
}

export default App;
