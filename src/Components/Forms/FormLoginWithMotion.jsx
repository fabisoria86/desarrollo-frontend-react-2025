import { useState } from "react";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";

import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { setLoginForm } from "../../store/form/formSlice.js";

const FormLoginWithMotion = ({ titleForm }) => {
    const dispatch = useDispatch();
    //const module = useSelector((state) => state.form.loginForm.module);
    const { module, username, email, password } = useSelector(
      (state) => state.form.loginForm
    );
    const { formData, handleChange, resetForm } = useForm({
      username: "",
      email: "",
      password: "",
    });
    /*useEffect(() => {
      if (
          formData.username !== username ||
          formData.email !== email ||
          formData.password !== password
      ) {
          resetForm({ username, email, password });
      }
    }, [username, email, password, resetForm]);*/
    /*useEffect(() => {
      if (
        formData.username === "" && formData.email === "" && formData.password === "" && 
        (formData.username !== username || formData.email !== email || formData.password !== password)
      ) {
        resetForm({ username, email, password });
      }
    }, [username, email, password, formData, resetForm]);*/
    /*useEffect(() => {
    }, [username, email, password]);
  */
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState("info");
    const [passwordVisible, setPasswordVisible] = useState(false);

    
    const handleSubmit = (e) => {
      e.preventDefault();
      const { username, email, password } = formData;
      const correctPassword = `mod7USIP-FABIOLAZS`;
  
      if (!username || !email || !password) {
        setModalMessage("Todos los campos son requeridos.");
        setModalType("danger");
        setShowModal(true);
        return;
      }
  
      if (password === correctPassword) {
        dispatch(
          setLoginForm({
            module: "React Mod7",
            username,
            email,
            password,
          })
        );
        setModalMessage(`¡Bienvenido ${username.toUpperCase()}!`);
        setModalType("success"); 
      } /*else {
        dispatch(
          setLoginForm({
            module: "React Mod7",
            username: "",
            email: "",
            password: `mod7USIP-FABIOLAZS`,//`mod7USIP-${username.toUpperCase()}`,
          })
        );*/
        else {
          setModalMessage("¡Usuario/Contraseña incorrectos!");
          setModalType("danger");
        }
        setShowModal(true);
      };
        //setModalMessage("¡Usuario/Contraseña incorrectos!");
        //setModalType("danger"); 
      
  
      //setShowModal(true);

  
    const onCloseModalInfo = () => {
      setShowModal(false);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ModalInfo
          visible={showModal}
          message={modalMessage}
          onClose={onCloseModalInfo}
          type={modalType}
        />
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{titleForm}</h3>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label>
                Module:
                <input
                  type="text"
                  name="module"
                  value={module}
                  readOnly
                  disabled
                />
              </label>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  //onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  //onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label>
                Password:
                <input
                 type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  //onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{ marginLeft: "10px" }}
                >
                  {passwordVisible ? "Ocultar" : "Ver"}
                </button>
              </label>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button type="submit">Enviar</button>
          </motion.div>
        </form>
      </motion.div>
    );
  };
  
  export default FormLoginWithMotion;