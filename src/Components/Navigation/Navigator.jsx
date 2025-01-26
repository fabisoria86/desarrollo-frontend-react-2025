/*import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { setLoginForm } from "../../store/form/formSlice.js";

const Navigator = () => {
  const { username, email, password, module } = useSelector(
    (state) => state.form.loginForm
  );
  const dispatch = useDispatch();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Solo limpia username y email, pero mantiene password y module
    dispatch(
      setLoginForm({
        module: module, // Mantén el valor de module
        username: "",   // Limpia username
        email: "",      // Limpia email
        password: password, // Mantén password para validación
      })
    );
    setShowLogoutModal(false); // Cierra el modal
  };

  const handleOpenModal = () => {
    setShowLogoutModal(true);
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="welcome-message">
          <span>
            Bienvenido <strong>{username}</strong> | Email: <strong>{email}</strong>
          </span>
        </div>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/counter" className="nav-link">Counter</Link>
        <Link to="/think" className="nav-link">Think</Link>
        <Link to="/products" className="nav-link">Product</Link>
        <Link to="/about" className="nav-link">About</Link>
        <button
          onClick={handleOpenModal}
          style={{
            marginLeft: "auto",
            padding: "10px 20px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </nav>


      <ModalInfo
        visible={showLogoutModal}
        message="¿Estás seguro que quieres cerrar sesión?"
        onClose={handleCloseModal}
        type="danger"
      >
        <button
          onClick={handleLogout}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Presiona para salir
        </button>
      </ModalInfo>
    </>
  );
};

export default Navigator;
*/
/*
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { setLoginForm } from "../../store/form/formSlice.js";

const Navigator = () => {
    const { username, email } = useSelector((state) => state.form.loginForm);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        setShowModal(true); // Mostrar el modal de confirmación al hacer clic en logout
    };

    const confirmLogout = () => {
        // Eliminar los valores del login en el store excepto password y module
        dispatch(
            setLoginForm({
                username: "",
                email: "",
                password: "",  // Mantener el valor de password
                module: "React Mod7",  // Mantener el valor de module
            })
        );
        setShowModal(false); // Cerrar el modal
    };

    const cancelLogout = () => {
        setShowModal(false); // Cerrar el modal si se cancela
    };

    return (
        <nav className="navbar">
            <div className="welcome-message">
                <span>
                    Bienvenido <strong>{username}</strong> | Email: <strong>{email}</strong>
                </span>
            </div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/products" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <button onClick={handleLogout} className="nav-link">Logout</button> 
            <ModalInfo
                visible={showModal}
                message="¿Estás seguro que quieres cerrar sesión?"
                onClose={cancelLogout}
                type="info"
                confirmAction={confirmLogout}
                confirmText="Presiona para salir"
            />
        </nav>
    );
}

export default Navigator;
*/
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { setLoginForm } from "../../store/form/formSlice.js";
//import useForm from "../Hooks/useForm.js";

const Navigator = () => {
    const { username = "", email = "" } = useSelector((state) => state.form.loginForm); 
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        module: "",
      });
      
    const clearForm = () => {
        setFormData({
          username: "",
          email: "",
          password: "",
          module: "",
        });
      };

    const handleLogout = () => {
        setShowModal(true); 
    };

    const handleConfirmLogout = () => {
 
        dispatch(setLoginForm({ username: "", email: "", password: "", module: "" }));

        clearForm();
        setShowModal(false);
    };
    

    const handleCancelLogout = () => {
        setShowModal(false); 
    };

    return (
        <nav className="navbar">
            <div className="welcome-message">
                <span>
                    Bienvenido <strong>{username}</strong> | Email: <strong>{email}</strong>
                </span>
            </div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/products" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>

            <ModalInfo
                visible={showModal}
                message="¿Estás seguro de que deseas cerrar sesión?"
                onClose={handleCancelLogout}
                type="danger"
                actions={
                    <>
                        <button onClick={handleConfirmLogout} style={{ marginRight: "10px" }}>
                            Presiona para salir
                        </button>
                        <button onClick={handleCancelLogout} className="logout-btn">Cancelar</button>
                    </>
                }
            />
        </nav>
    );
};

export default Navigator;

/*const Navigator = () => {
    const { username = "", email = "" } = useSelector((state) => state.form.loginForm); 
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        setShowModal(true); 
    };

    const handleConfirmLogout = () => {
        dispatch(setLoginForm({  module: "", username: "", email: "", password: "" })); 
        setShowModal(false);
    };

    const handleCancelLogout = () => {
        setShowModal(false); 
    };

    return (
        <nav className="navbar">
            <div className="welcome-message">
                <span>
                    Bienvenido <strong>{username}</strong> | Email: <strong>{email}</strong>
                </span>
            </div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/products" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>

            <ModalInfo
                visible={showModal}
                message="¿Estás seguro de que deseas cerrar sesión?"
                onClose={handleCancelLogout}
                type="danger"
                actions={
                    <>
                        <button onClick={handleConfirmLogout} style={{ marginRight: "10px" }}>
                            Presiona para salir
                        </button>
                        <button onClick={handleCancelLogout} className="logout-btn">Cancelar</button>
                    </>
                }
            />
        </nav>
    );
};

export default Navigator;*/