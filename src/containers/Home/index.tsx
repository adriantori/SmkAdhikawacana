import Hero from "./Hero";
import { Divider } from "../../components";
import Phase1 from "./Phase1";
import Phase2 from './Phase2'
import Phase4 from "./Phase4";

const Home = () => {
  return (
    <>
      <Hero/>
      <Divider/>
      <Phase1 />
      <Divider/>
      <Phase2/>
      <Phase4/>
    </>
  );
}

export default Home;
