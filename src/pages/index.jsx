import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great. And test it. Forsooth tho</p>

  </Layout>
);

export default IndexPage;
