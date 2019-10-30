import React from 'react';
import "./DeleteButton.scss";

type Props = {
  handleClick: Function
}

const DeleteButton = ({
  handleClick
}: Props) => {



    return (
    <div className="DeleteButton">
      <img src="delete.svg" alt="Clear input" onClick={() => handleClick()} />
    </div>
  );
};

export default DeleteButton;
