import Nav from '../components/nav'
import Footer from '../components/Footer'
import React from 'react'
// import Head from 'next/head';

export default function CareersPage() {
  return (
    <div>
      <Nav />
      <div className="ml-16">

      {/* <Head>
      </Head> */}
      <h1 className="bigH1 font-bold">Work with Temporal</h1>
      <h2 className="text-2xl">If none of these positions are a fit, email jobs@temporal.io describing your dream job.</h2>
      </div>
      <div className="container ml-16 bg-gray-300 p-8 rounded-lg my-16" >
      <div id='lever-jobs-container'></div>
      </div>
      <hr />
      <Footer/>
    </div>
  )
}