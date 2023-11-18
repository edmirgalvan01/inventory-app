import {
  ReportIcon,
  TrendingIcon,
  TrophyIcon,
  UserIcon,
} from "../../../components/icons";
import { HomeInfoItem } from "./HomeInfoItem";

export function HomeInfo() {
  return (
    <div className="homePage--info">
      <h3>Esto significa que</h3>
      <HomeInfoItem
        icon={<TrendingIcon />}
        text="Sus ganancias han incrementado un 34% con respecto al
            ultimo mes"
      />
      <HomeInfoItem
        icon={<UserIcon />}
        text="Han obtenido un total de 14 nuevos clientes"
      />
      <HomeInfoItem
        icon={<ReportIcon />}
        text="Sus ventas han tenido $542.34 como promedio general"
      />
      <HomeInfoItem
        icon={<TrophyIcon />}
        text="Han ganado un 13% con respecto a su inversión"
      />
    </div>
  );
}
