import { Navbar } from "../../components/Navbar/Navbar";
import { HomeCards } from "./components/HomeCards";
import { HomeInfo } from "./components/HomeInfo";
import { HomeRewards } from "./components/HomeRewards";
import { HomeTitle } from "./components/HomeTitle";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <section className="homePage">
        <HomeTitle />
        <HomeCards />
        <HomeInfo />
        <HomeRewards />
      </section>

      <Navbar />
    </>
  );
}
