import React, { FC } from "react";
import Button from "react-bootstrap/Button";

interface AletProp {
  message: string;
  onClose: () => void;
}

const Alert: FC<AletProp> = ({ message, onClose }) => {
  return (
    <div className="modal is-active has-text-centered">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-danger">
          <p className="modal-card-title has-text-white">{message}</p>
        </header>
        <footer
          className="modal-card-foot"
          style={{ justifyContent: "center" }}
        >
          <Button onClick={onClose}>Close</Button>
        </footer>
      </div>
    </div>
  );
};

export default Alert;
