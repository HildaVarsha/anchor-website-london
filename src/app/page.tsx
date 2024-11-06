import {
  HomeBanner,
  HomeLetsTalk,
  HomeOurExpertise,
  HomeOurServices,
  HomeWhatWeDo,
} from "@/components/home";

export default function Home() {
  return (
    <div className="h-full">
      <HomeBanner />
      <HomeLetsTalk />
      <HomeOurExpertise />
      <HomeWhatWeDo />
      <HomeOurServices />
    </div>
  );
}
