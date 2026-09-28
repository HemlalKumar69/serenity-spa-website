import Hero from "../../components/home/Hero";
import Intro from "../../components/home/Intro";
import FeaturedServices from "../../components/home/FeaturedServices";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Stats from "../../components/home/Stats";
import TherapistsPreview from "../../components/home/TherapistsPreview";
import Testimonials from "../../components/home/Testimonials";
import GalleryPreview from "../../components/home/GalleryPreview";
import CTA from "../../components/home/CTA";

import LocationMap from "../../components/common/LocationMap";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedServices />
      <WhyChooseUs />
      <Stats />
      <TherapistsPreview />
      <Testimonials />
      <GalleryPreview />
      <CTA />

      <LocationMap />
    </>
  );
};

export default Home;