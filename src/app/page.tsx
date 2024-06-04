import ArticleCard from "@/components/card/article/articleCard";
import ChefCard from "@/components/card/chef/chefCard";
import ReviewCard from "@/components/card/review/reviewCard";
import { reviews, chefs, articles, events } from './data';
import HeaderSection from "@/components/section/home/headerSection/headerSection";
import AboutUs from "@/components/section/home/headerSection/aboutUsSection";
import Services from "@/components/section/home/headerSection/servicesSection";

export default function Home() {
  return (<div>
    <HeaderSection/>
    <main className="container mx-auto p-4">
      <AboutUs />
      <Services />
    </main>
  </div>
  );
}