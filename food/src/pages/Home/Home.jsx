import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

function Home() {
  return (
    <div>
      <Layout>
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
      </Layout>
    </div>
  )
}

export default Home
