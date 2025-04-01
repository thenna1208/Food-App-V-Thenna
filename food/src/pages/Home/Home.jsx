import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

function Home() {
  return (
    <div>
      <Layout>
        {/* Home Section Hero Banner */}
        <section id="home-section">
          <Section1 />
        </section>

        {/* Home Section About */}
        <section id="about-section">
          <Section2 />
        </section>

        {/* Home Section Menu */}
        <section id="menu-section">
          <Section3 />
        </section>

        {/* Home Section Promotion */}
        <section id="promotion-section">
          <Section4 />
        </section>

        {/* Home Section Shop */}
        <section id="shop-section">
          <Section5 />
        </section>

        {/* Home Section Blog */}
        <section id="blog-section">
          <Section6 />
        </section>

        {/* Home Section Contact */}
        <section id="contact-section">
          <Section7 />
        </section>
      </Layout>
    </div>
  )
}

export default Home