import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import PageNotFoundImage from "../../../assets/compu.svg";
import { PublicRoutes } from "../../../models/routes";
import MenuHeader from "../../MenuHeader";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", paddingBottom: "16px" }}>
      <MenuHeader isSearch={false}/>
      <h3>Parece que esta página no existe</h3>
      <div style={{ margin: "25px" }}>
        <img src={PageNotFoundImage} alt="página no encontrada" />
      </div>
      <Button onClick={() => navigate(PublicRoutes.HOME)}>
        Ir a la página principal
      </Button>
    </div>
  );
};
