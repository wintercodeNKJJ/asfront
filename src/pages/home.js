import ImageSlider from "../components/ImageSlider";
import TopNewsBlock from "../components/TopNewsBlock";
import WhoWeAre from "../components/WhoWeAre";
import PartnersLogo from "../components/PatnersLogo";
import OptionsItems from "../components/OptoinsItems";
import TeamBest from "../components/TeamBest";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <TopNewsBlock />
      <WhoWeAre />
      <PartnersLogo />
      <OptionsItems />
      <TeamBest />
    </div>
  );
}

export default Home;