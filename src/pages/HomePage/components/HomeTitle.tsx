import { useGetNow } from "../../../hooks/useGetNow";

export function HomeTitle() {
  const now = useGetNow();

  return (
    <div className="homePage--title">
      <h1>Hola Jair,</h1>
      <span>este es el resumen de su negocio</span>
      <small>Ultima actualizacion el {now}</small>
    </div>
  );
}
