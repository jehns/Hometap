import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";


const Header = styled.header`
  border-bottom: ${props => `1px solid ${props.theme.colors.lightGray2}`};
  margin: 0 0 1.45rem 0;
  padding-left: 85px;
  height: 64px;
  display:  flex;
  align-items: center;
  ${props => props.theme.media.smallDesktop`
    padding-left: 15px;
  `};
`

const HeaderComponent = () => {
  const data = useStaticQuery(graphql`
  query {
      file(relativePath: { eq: "hometapLogo.png" }) {
        childImageSharp {
          fixed(width: 130, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Header>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} alt="Hometap" />
      </Link>
    </Header>
  )
};


export default HeaderComponent;
