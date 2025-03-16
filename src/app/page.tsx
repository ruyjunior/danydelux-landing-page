import Hero from "@/components/Hero";
//import Pricing from "@/components/Pricing/Pricing";
//import FAQ from "@/components/FAQ";
//import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Location from "@/components/Location";
//import Team from "@/components/Team";
import Payments from "@/components/Payments";
//import NewsCarousel from "@/components/News";
import Carousel from "@/components/Carousel";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Carousel />

        {/*<Benefits /> */}
        {/*/<Pricing /> */}
        <Payments />
        {/*<Team />*/}
        {/*<FAQ /> */}
        <Location />
      </Container>
    </>
  );
};

export default HomePage;
