import Layout from '@/components/Layout'
import React from 'react'

function Term() {
  return (
    <Layout>
      <div className='py-4 max-w-4xl'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-bold'>Terms & Conditions</h1>
          <span>
            These Terms and Conditions govern your use of the Bymore e-commerce platform and services.
            By accessing or using our website, you agree to comply with these Terms and Conditions.
            Please read them carefully before proceeding.
          </span>
        </div>
        <div className="markdown">
          <h2>1. User Conduct:</h2>
          <ul>
            <li>You are solely responsible for any content you post, including item listings, descriptions, images, and communications with other users. Ensure that all content is accurate, lawful, and does not infringe upon any third-party rights.</li>

            <li>You must not engage in any fraudulent, deceptive, or illegal activities on the platform, including but not limited to misrepresenting products, engaging in counterfeiting, or conducting unauthorized transactions.</li>
          </ul>

          <h2>2. Account Registration:</h2>

          <ul>
            <li>
              To access certain features of Bymore, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and ensuring its accuracy.
            </li>

            <li>
              You must be at least 18 years old to create an account and use our services. If you are creating an account on behalf of a business entity, you represent and warrant that you have the authority to bind that entity to these Terms and Conditions.
            </li>
          </ul>

          <h2>3. Cookies and how we use them</h2>

          <p>
            A cookie is a small file of letters and numbers that we put on your
            computer if you agree.
          </p>

          <p>
            Cookies allow us to distinguish you from other users of our website
            and mobile applications, which helps us to provide you with an
            enhanced browsing experience. For example we use cookies for the
            following purposes:
          </p>

          <ul>
            <li>
              Recognising and counting the number of visitors and to see how
              visitors move around the site when they are using it (this helps
              us to improve the way our website works, for example by ensuring
              that users can find what they are looking for).
            </li>

            <li>
              Identifying your preferences and subscriptions e.g. language
              settings, saved items, items stored in your basket and Prime
              membership; and
            </li>

            <li>
              Sending you newsletters and commercial/advertising messages
              tailored to your interests.
            </li>
          </ul>

          <p>
            Our approved third parties may also set cookies when you use our
            marketplace. Third parties include search engines, providers of
            measurement and analytics services, social media networks and
            advertising companies.
          </p>

          <h2>4. Buying and Selling:</h2>

          <ul>
            <li>
              Bymore acts as a platform to facilitate transactions between buyers and sellers. We do not guarantee the availability, quality, or legality of the products listed on our platform. It is your responsibility to verify the accuracy and suitability of any item before making a purchase.
            </li>

            <li>
              Sellers are responsible for accurately describing their products, setting reasonable prices, and fulfilling orders in a timely manner. Buyers are responsible for completing transactions and making payments as agreed upon.
              c. Bymore is not involved in the actual transaction between buyers and sellers, and we do not assume any responsibility or liability for the actions or omissions of users.
            </li>
          </ul>

          <h2>5. Intellectual Property:</h2>

          <ul>
            <li>
              All content on the Bymore platform, including logos, trademarks, text, images, and software, is the property of Bymore or its licensors and is protected by intellectual property laws. You may not use, reproduce, modify, or distribute any content without prior written consent from Bymore.
            </li>

            <li>
              By posting content on Bymore, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, and display the content for the purpose of operating and promoting the platform.
            </li>
          </ul>

          <h2>6.Privacy:</h2>

          <ul>
            <li>
              Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal data.
            </li>
          </ul>

          <h2>7. Dispute Resolution:</h2>

          <ul>
            <li>
              Any disputes or claims arising out of or relating to these Terms and Conditions or the use of Bymore shall be resolved through negotiation or other mutually agreed-upon methods.
            </li>

            <li>
              If a dispute cannot be resolved amicably, it shall be submitted to binding arbitration in accordance with the rules of the arbitration organization agreed upon by both parties.
            </li>
          </ul>

          <h2>8. Limitation of Liability:</h2>

          <ul>
            <li>
              Bymore shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of our platform, even if advised of the possibility of such damages.
            </li>

            <li>
              Bymore does not guarantee the continuous, uninterrupted, or secure access to our platform and services. We reserve the right to modify, suspend, or terminate the platform at any time without prior notice.
            </li>
          </ul>

          <h2>9. Governing Law:</h2>

          <ul>
            <li>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].
            </li>
          </ul>

          <p>
            By accessing or using Bymore, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, please refrain from using our platform and services.
          </p>

        </div>
      </div>
    </Layout>
  )
}

export default Term
