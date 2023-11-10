import React, {useContext} from "react";
import rowLeft from "../../assets/rowlefth.png";
import { Link } from "react-router-dom";
import next from "../../assets/sounds/next.wav";
import { UserContext } from "../../context/UserProvider";

export default function ReturnBtn({ link }) {

  const { desincrementarBarra } = useContext(UserContext)

  const reproducirSonido = () =>{
    const audio = new Audio(next);
    audio.play();
  }

  return (
    <Link to={link} className="return-btn btn" onClick={()=>{desincrementarBarra(); reproducirSonido();}}>
      <img src={rowLeft} />
      Atras
    </Link>
  );
}
