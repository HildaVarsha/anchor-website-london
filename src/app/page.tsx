import {
  HomeBanner,
  HomeGetInTouch,
  HomeLetsTalk,
  HomeOurExpertise,
  HomeOurServices,
  HomeWhatWeDo,
  HomeWhyChooseUs,
} from "@/components/home";
import { Footer } from "@/components/shared";

export default function Home() {
  return (
    <div className="h-full">
      <HomeBanner />
      <HomeLetsTalk />
      <HomeOurExpertise />
      <HomeWhatWeDo />
      <HomeOurServices />
      <HomeWhyChooseUs />
      <HomeGetInTouch />
      <Footer />
    </div>
  );
}
