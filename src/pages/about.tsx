import Layout from '@/components/Layout'
import React from 'react'

function About() {
  return (
    <Layout>
      <div className='py-4'>
        <h1 className='text-xl font-bold'>About Us</h1>
        <div className="markdown mt-0 max-w-4xl">
          <h4>Company Profile</h4>
          <p>
          Welcome to Bymore, your go-to e-commerce platform for buying and selling a wide range of 
          products! Whether you're searching for a unique item or looking to sell your own, 
          Bymore provides a user-friendly and secure marketplace where buyers and sellers can connect. 
          Our platform is designed to streamline the online shopping experience, allowing users to post 
          items for sale, browse listings, and conveniently contact sellers. At Bymore, we are committed to delivering an exceptional 
          online marketplace that caters to the diverse needs and preferences of our valued users.
          </p>
          <div>
            <h4>Mission & Values</h4>
            <p>
            At Bymore, we are driven by our mission and guided by our values, 
            constantly working towards providing an exceptional online marketplace that 
            enriches the lives of our users and connects communities.
            </p>
          </div>
          <div>
            <span>Buymore Advantages</span>
            <div>
              <h6>1. Affordable Prices</h6>
              <p>
              Prices: Bymore understands the importance of finding great deals. 
              We strive to offer affordable prices on a wide range of products available on our 
              platform. Whether you're looking for brand-new or pre-loved items, you'll find competitive 
              prices that won't break the bank. 
              With Bymore, you can shop smart and stretch your budget further.
              </p>
            </div>
            <div>
              <h4>2. Quality Products</h4>
              <p>
              We believe that quality should never be compromised when it 
              comes to online shopping. At Bymore, we ensure that all products 
              listed on our platform meet our rigorous quality standards. We carefully 
              vet sellers and their offerings to ensure that you can browse and purchase with 
              confidence. With Bymore, you can expect reliable products that are built to last.
              </p>
            </div>
            <div>
              <h4>3. Unbeatable Shipping Fees</h4>
              <p>
              Bymore understands that shipping fees can often be a concern 
              for online shoppers. That's why we have partnered with 
              trusted shipping providers to offer unbeatable shipping fees. 
              We work hard to negotiate the best rates, ensuring that you receive your 
              purchases promptly and at a fraction of the cost. With Bymore, 
              you can enjoy hassle-free and cost-effective shipping.
              </p>
            </div>
            <div>
              <h4>4. Customer Services</h4>
              <p>
              At Bymore, we prioritize providing excellent customer service. 
              Our dedicated support team is available to assist you throughout 
              your shopping journey, addressing any questions, concerns, or issues 
              you may encounter. We value your satisfaction and strive to make your 
              experience on our platform as seamless as possible. With Bymore, you can trust that you'll 
              receive exceptional customer service whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
