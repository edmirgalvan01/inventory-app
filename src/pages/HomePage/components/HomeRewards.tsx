import { HomeRewardsItem } from "./HomeRewardsItem";

export function HomeRewards() {
  return (
    <div className="homePage--rewards">
      <HomeRewardsItem
        title="Aleron delantero"
        description="Articulo mas vendido"
      />
      <HomeRewardsItem title="$3,232.3" description="Mejor venta registrada" />
    </div>
  );
}
