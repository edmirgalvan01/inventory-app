import { MouseEventHandler } from "react";
import "./buttons.css";

export function PrimaryButton({
  children,
  onClick,
}: {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="primaryButton" onClick={onClick}>
      {children}
    </button>
  );
}
