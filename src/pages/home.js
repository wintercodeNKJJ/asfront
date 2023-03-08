import ImageSlider from "../components/ImageSlider";
import TopNewsBlock from "../components/TopNewsBlock";
import WhoWeAre from "../components/WhoWeAre";
import PartnersLogo from "../components/PatnersLogo";
// import OptionsItems from "../components/OptoinsItems";
import TeamBest from "../components/TeamBest";


/**
 * Composed of several components
 * Not all are linked to sanity
 * @returns the home page of AS
 */
const Home = () => {
  return (
    <div>
      <ImageSlider />
      <TopNewsBlock />
      <WhoWeAre />
      <PartnersLogo />
      <TeamBest />
    </div>
  );
}

export default Home;