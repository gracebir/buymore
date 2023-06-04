import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import ProductSection from "@/components/ProductSection";
import { productProps } from "@/type";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home({products}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(products)
  return (
    <div>
      <Layout>
        <Hero/>
        <ProductSection products={products}/>
      </Layout>
    </div>
  )
}


export const getServerSideProps:GetServerSideProps<{products: productProps[]}> = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  return {
    props: {
      products
    }
  }
}