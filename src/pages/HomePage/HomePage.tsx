import "./HomePage.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { HomeCards } from "./components/HomeCards";
import { HomeInfo } from "./components/HomeInfo";
import { HomeRewards } from "./components/HomeRewards";
import { HomeTitle } from "./components/HomeTitle";

export function HomePage() {
  return (
    <>
      <section className="homePage containerPage">
        <HomeTitle />
        <HomeCards />
        <HomeInfo />
        <HomeRewards />
      </section>
      <Navbar />
    </>
  );
}
