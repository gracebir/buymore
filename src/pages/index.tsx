import { databases } from "@/appwrite";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import ProductSection from "@/components/ProductSection";
import { Models } from "appwrite";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home({products}:InferGetServerSidePropsType<typeof getServerSideProps>) {

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
  const document = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE as string,
    process.env.NEXT_PUBLIC_PRODUCT_COLLECTION as string
  )
  let products = document.documents
  return {
    props: {
      products: products
    }
  }
}