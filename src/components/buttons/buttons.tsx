import "./buttons.css";

export function PrimaryButton({ children }: { children: string }) {
  return <button className="primaryButton">{children}</button>;
}
