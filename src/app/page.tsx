import { HomeBanner, HomeLetsTalk, HomeOurExpertise } from "@/components/home";

export default function Home() {
  return (
    <div className="h-full">
      <HomeBanner />
      <HomeLetsTalk />
      <HomeOurExpertise />
    </div>
  );
}
