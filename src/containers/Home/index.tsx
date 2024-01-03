import Hero from "./Hero";
import { Divider } from "../../components";
import Phase1 from "./Phase1";
import Phase2 from './Phase2';
import Phase3 from './Phase3';
import Phase4 from "./Phase4";
import Phase5 from './Phase5';
import Phase6 from './Phase6';
import Phase7 from './Phase7';

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
      <Divider/>
      <Phase7/>
    </>
  );
}

export default Home;
