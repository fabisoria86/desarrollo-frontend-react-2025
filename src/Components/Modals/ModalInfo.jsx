import { motion } from "motion/react"

/*const ModalInfo = ({ visible, message, onClose }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}</p>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalInfo;*/
/*const ModalInfo = ({ visible, message, onClose, type = "info", children }) => {
    if (!visible) return null;
  
    const modalStyles = {
      success: { background: "#d4edda", color: "#155724", border: "1px solid #c3e6cb" },
      danger: { background: "#f8d7da", color: "#721c24", border: "1px solid #f5c6cb" },
      info: { background: "#d1ecf1", color: "#0c5460", border: "1px solid #bee5eb" },
    };
  
    const style = modalStyles[type] || modalStyles.info;
  
    return (
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            ...style,
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "300px",
          }}
        >
          <p>{message}</p>
          {children && <div>{children}</div>}
          <button
            onClick={onClose}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
        </motion.div>
      </div>
    );
  };
  
  export default ModalInfo;*/
  const ModalInfo = ({ visible, message, onClose, type = "info", actions }) => {
    if (!visible) return null;
  
    const modalStyles = {
      success: { background: "#d4edda", color: "#155724", border: "1px solid #c3e6cb" },
      danger: { background: "#f8d7da", color: "#721c24", border: "1px solid #f5c6cb" },
      info: { background: "#d1ecf1", color: "#0c5460", border: "1px solid #bee5eb" },
    };
  
    const style = modalStyles[type] || modalStyles.info;
  
    return (
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            ...style,
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "300px",
          }}
        >
          <p>{message}</p>
          <div>
            {actions}
          </div>
          <button
            onClick={onClose}
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
            Cerrar
          </button>
        </motion.div>
      </div>
    );
  };
  
  export default ModalInfo;

