import React from "react";
import "./AppModal.scss";

const AppModal = ({ showModal, setShowModal, children }: any) =>
  showModal ? (
    <div className="app-modal" onClick={() => setShowModal(false)}>
      <div className="app-modal_content">
        <div className="app-modal_children" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  ) : null;

export default AppModal;
