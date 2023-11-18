import { HomeCardItem } from "./HomeCardItem";

export function HomeCards() {
  return (
    <div className="homePage--cards">
      <HomeCardItem text="El ultimo mes se vendieron" data="$12,540.32" />
      <HomeCardItem text="El ultimo mes se compraron" data="$7,231.54" />
    </div>
  );
}
