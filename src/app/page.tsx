import { Catalog } from "@/components/Catalog";
import { Carousel } from "@/components/Carousel";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return <><Header /><main><Hero /><Catalog /><Carousel /><Reviews /><ContactForm /></main><Footer /></>;
}
