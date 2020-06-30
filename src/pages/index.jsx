import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Images from "../components/Images"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Welcomme|||"
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
               <Images name='foto01'/>
              </div>
              <div className="carousel-item">
                <Images name='foto02'/>
              </div>
              <div className="carousel-item">
                <Images name='foto03'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1>Home</h1>
          <p>Welcome to your new Gatsby site.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage;
