import '../css/index.css'
import image from '../images/construction.png';

const Index = () => {

  return (
    <div className="container">
      <div className="topPortion">
        <img className="topImage" src={image.src} alt="Construction worker image" />
        <div>
          <p className="topText">Fatin Rakennus Tmi on vuonna 2021 perustettu rakennusalan yritys, jota pyörittää Fatmir Statovci. Yli 25 vuoden kokemuksella tarjoamme monipuolisia ja laadukkaita sisärakennustöitä. 
            Olemme erikoistuneet huolelliseen ja ammattitaitoiseen viimeistelyyn, ja toteutamme jokaisen projektin asiakkaan toiveiden mukaisesti.
            Ota yhteyttä, niin tehdään kodistasi tai toimitilastasi juuri sellainen kuin haluat!
          </p>
        </div>
      </div>
      <div className="middlePortion">
        
      </div>
    </div>
  );
}

export default Index;