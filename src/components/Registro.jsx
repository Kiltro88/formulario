//Registro.jsx
import Formulario from "./Formulario";
import SocialButton from './SocialButton';
import Alert from "./Alert";
import Validacion from "./Validacion";
import { useState } from "react";

function Registro(){
  const [validationResult, setValidationResult] = useState(null);

  const handleValidationResult = (result) => {
    setValidationResult(result);
  };

  return (

    <div className="container mt-5">
      <div className="card p-4">
        <h1 className="text-center">Registro</h1>
        <div className="row mt-3">
          <div className="col-4">
            <SocialButton canalSocial="facebook" />
          </div>
          <div className="col-4">
            <SocialButton canalSocial="instagram" />
          </div>
          <div className="col-4">
            <SocialButton canalSocial="linkedin" />
          </div>
        </div>
        <Formulario onValidationResult={handleValidationResult} />
        {validationResult && (
          <Alert message={validationResult.mensaje} error={validationResult.error} />
        )}
      </div>
    </div>
  );
}


export default Registro;