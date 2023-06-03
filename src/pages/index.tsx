import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero/>
        <ProductSection/>
      </Layout>
    </div>
  )
}
