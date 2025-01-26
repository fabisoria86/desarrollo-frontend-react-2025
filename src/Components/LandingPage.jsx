import React from 'react';
import './../../src/App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      <h2>Bienvenido</h2>
      <p>Este módulo se centra en el uso de React, incluyendo la creación de componentes, el manejo de hooks, y el uso de Redux.</p>

      <h2>Temas Cubiertos</h2>
      <div className="topics">
        <div className="topic">
          <p>Componentes funcionales y de clase.</p>
        </div>
        <div className="topic">
          <p>Uso de React hooks como useState y useEffect.</p>
        </div>
        <div className="topic">
          <p>Creación de custom hooks como useForm.</p>
        </div>
        <div className="topic">
          <p>Gestión de variables de estado con useState.</p>
        </div>
        <div className="topic">
          <p>Gestión de estado global con Redux.</p>
        </div>
        <div className="topic">
          <p>Integración de Redux con React.</p>
        </div>
        <div className="topic">
          <p>Manejo de formularios en React.</p>
        </div>
        <div className="topic">
          <p>Publicando nuestra página con GitHub Pages.</p>
        </div>
      </div>

      <h2>Resultados Adicionales</h2>
      <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
      <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">https://react.dev/learn</a>
    </div>
  );
};

export default LandingPage;