import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/counter/">Counter</Link>
  </Layout>
)

export default IndexPage
