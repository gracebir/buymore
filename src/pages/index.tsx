import { databases } from "@/appwrite";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import ProductSection from "@/components/ProductSection";
// import { productProps, productsProp } from "@/type";
import { Models } from "appwrite";
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


export const getServerSideProps:GetServerSideProps<{products: Models.Document[]}> = async () => {
  // const res = await fetch('https://fakestoreapi.com/products')
  const document = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE as string,
    process.env.NEXT_PUBLIC_PRODUCT_COLLECTION as string
  )
  const products = document.documents
  // const products = await res.json()
  return {
    props: {
      products
    }
  }
}