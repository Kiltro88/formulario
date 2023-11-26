// Validacion.jsx
const Validacion = (e,{ nombre, email, password, passwordConfirm}) => {
  e.preventDefault();
  if (nombre === "" || email === "" || password === "" || passwordConfirm === "") {
    return { error: true, mensaje: "Todos los campos son obligatorios" };
  }

  if (password !== passwordConfirm) {
    return { error: true, mensaje: "Las contraseñas no coinciden" };
  }
  return { error: false, mensaje: "Todo OK" };
};

export default Validacion;