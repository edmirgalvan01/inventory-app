export function HomeInfoItem({
  icon,
  text,
}: {
  icon: JSX.Element;
  text: string;
}) {
  return (
    <div className="homePage--info__item">
      {icon}
      <p>{text}</p>
    </div>
  );
}
