import React from "react";

type Props = {
  message: string;
  type: string;
};

const Alert = ({ message, type }: Props) => <span className={`Alert Alert__${type}`}>{message}</span>;

export default Alert;
