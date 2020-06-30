import React from "react"
import Layout from "../components/Layout";
import SEO from "../components/seo"

import * as Styled from '../styles/pages/contactStyles'

const Contact = () => {
  const text = "Texto Contact"

  return (
    <Layout>
      <SEO title="Contact"/>
      <div className="container py-4 mb-3">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
            <p>{text}</p>
          </div>
          <div className="col-md-6">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="name" placeholder="name"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="E-mail"/>
            </div>
            <div className="form-group">
              <textarea className="form-control" id="textarea" rows="3" placeholder="text"></textarea>
            </div>
            <button type="submit" className="btn btn-success">Send</button>
          </form>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <Styled.EmailWrapper danger/> E-mail
              </li>
              <li className="list-group-item">
                <Styled.PhoneWrapper
                  color="#9c69ac"
                  width="30px"/> Telefone
              </li>
              <li className="list-group-item">
                <Styled.LocationWrapper
                  color="#9c69ac"
                  width="30px"/> Localização
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;