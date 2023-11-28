import { MouseEventHandler } from "react";
import "./buttons.css";

export function PrimaryButton({
  children,
  onClick,
  width = "100%",
}: {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  width?: string;
}) {
  return (
    <button style={{ width }} className="primaryButton" onClick={onClick}>
      {children}
    </button>
  );
}
