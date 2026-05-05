import HomeHero from '@/components/sections/home/HomeHero';
import HomeIntro from '@/components/sections/home/HomeIntro';
import HomePrinciples from '@/components/sections/home/HomePrinciples';
import HomeSnapshot from '@/components/sections/home/HomeSnapshot';
import HomePortfolio from '@/components/sections/home/HomePortfolio';
import HomeSustain from '@/components/sections/home/HomeSustain';
import HomeNews from '@/components/sections/home/HomeNews';
import HomeCTA from '@/components/sections/home/HomeCTA';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomePrinciples />
      <HomeSnapshot />
      <HomePortfolio />
      <HomeSustain />
      <HomeNews />
      <HomeCTA />
    </>
  );
}
