import Hero from "./Hero";
import { Divider } from "../../components";
import Phase1 from "./Phase1";
import Phase2 from './Phase2';
import Phase3 from './Phase3';
import Phase5 from './Phase5';
import Phase4 from "./Phase4";

const Home = () => {
  return (
    <>
      <Hero/>
      <Divider/>
      <Phase1 />
      <Divider/>
      <Phase2/>
      <Divider/>
      <Phase3/>
      <Divider/>
      <Phase4 />
      <Divider/>
      <Phase5/>
    </>
  );
}

export default Home;
