export function HomeRewardsItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="homePage--rewards__item">
      <h4>{title}</h4>
      <span>{description}</span>
    </div>
  );
}
