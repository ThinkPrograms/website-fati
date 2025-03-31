import Card from "../components/card";
import "../css/services.css"

const Services = () => {
  return (
    <div className="container">
      <div className="cards">
        <Card image="imagelink" title="Saunarakentaminen" text="väli seinätväliseinät väliseinätväl iseinät iseinät iseinätiseinät iseinätiseinät iseinät iseinätiseinät iseinät"/>
        <Card image="imagelink" title="Alakatot ja väliseinät" text="oviasenntuksetoviasennt uksetoviasenntukset oviasenntukset oviasenntuksetoviasenntukset oviasenntukset"/>
        <Card image="imagelink" title="Kaluste- ja oviasenntukset" text="laminaatti asennuksetla minaatti asennuks etlaminaatti asennukset asennukset"/>
        <Card image="imagelink" title="Listoitukset ja laminaattiasennukset" text="Saunara kentaminenSa unarakenta minenSauna raken aminen aminen aminen aminen aminen"/>
      </div>
    </div>
  );
}

export default Services;