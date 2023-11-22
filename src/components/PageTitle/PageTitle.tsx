import "./PageTitle.css";
import { useGetNow } from "../../hooks/useGetNow";

export function PageTitle({ title }: { title: string }) {
  const now = useGetNow();

  return (
    <div className="pageTitle">
      <h1>{title}</h1>
      <small>Ultima actualización el {now}</small>
    </div>
  );
}
