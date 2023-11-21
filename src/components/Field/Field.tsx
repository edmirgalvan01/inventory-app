import "./Field.css";

interface FieldInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function FieldInput({
  label,
  type = "text",
  placeholder,
  onChange,
}: FieldInputProps) {
  return (
    <label className="field">
      {label}
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </label>
  );
}
