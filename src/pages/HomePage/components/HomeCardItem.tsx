export function HomeCardItem({ text, data }: { text: string; data: string }) {
  return (
    <article className="homePage--cards__item">
      <span>{text}</span>
      <h4>{data}</h4>
    </article>
  );
}
