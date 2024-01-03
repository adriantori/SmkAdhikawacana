import Hero from "./Hero";
import { Divider } from "../../components";
import Phase1 from "./Phase1";
import Phase2 from './Phase2';
import Phase3 from './Phase3';
import Phase4 from "./Phase4";
import Phase5 from './Phase5';
import Phase6 from './Phase6';

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
      <Phase4/>
      <Divider/>
      <Phase5/>
      <Divider/>
      <Phase6/>
    </>
  );
}

export default Home;
