import "../css/services.css"
import { MouseEventHandler, useState } from "react";

const Services = () => {
  const [selectedTitle, setSelectedTitle] = useState(1);

  // individual link and content strings work as a pair. For an example "Alakatot ja väliseinät" and "Content 2" are a pair. 
  const links = [
    "Saunarakentaminen",
    "Alakatot ja väliseinät",
    "Kaluste- ja oviasennukset",
    "Listoitukset ja laminaattiasennukset",
  ];
  const content = [
    "Content 1",
    "Content 2",
    "Content 3",
    "Content 4",
  ];

  function selectTitle(index: number) {
    setSelectedTitle(index);
  }

  return (
    <div className="container">
      <div className="services-container">
        <div className="services-navbar">
          {links.map((link, index) => (
            <p key={index} className={`navbar-titles prevent-select ${selectedTitle === index + 1 ? "selected-title" : ""}`} onClick={() => selectTitle(index + 1)}>
              {link}
            </p>
          ))}
        </div>
        <div className="services-description">
          {content.map((content, index) => (
            <p key={index}>
              {selectedTitle === index + 1 && content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;