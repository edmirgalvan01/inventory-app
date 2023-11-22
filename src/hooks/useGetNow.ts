export function useGetNow() {
  const now = new Date().toLocaleString("es-MX");
  return now;
}
