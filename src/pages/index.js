import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram, FaPhone, FaSkype, FaTelegram, FaLocationArrow } from "react-icons/fa"
import siteConfig from '../../data/siteConfig'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Skills from '../components/skills'
import Interests from '../components/interests'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  render () {
    const title = siteConfig.siteTitle
    const {keywords} = siteConfig
    return (
      <Layout location={this.props.location}>
        <SEO
          title={title}
          keywords={keywords}
        />

        <Hero
          heroImg={siteConfig.siteCover}
          title={title}
        />

        <Wrapper className={this.props.className} >
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className='avatar'>
                <img
                  className='avatar__image'
                  src={siteConfig.authorAvatar}
                  alt='user avatar'
                />
                <div className="social">
                  {siteConfig.social.github && <a className="social-link github" target="_blank" rel="noopener noreferrer" href={siteConfig.social.github}>
                    <FaGithub className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.linkedin && <a className="social-link linkedin" target="_blank" rel="noopener noreferrer" href={siteConfig.social.linkedin}>
                    <FaLinkedin className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.instagram && <a className="social-link instagram" target="_blank" rel="noopener noreferrer" href={siteConfig.social.instagram}>
                    <FaInstagram className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.twitter && <a className="social-link twitter" target="_blank" rel="noopener noreferrer" href={siteConfig.social.twitter}>
                    <FaTwitter className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.email && <a className="social-link email" target="_blank" rel="noopener noreferrer" href={`mailto:${siteConfig.social.email}`}>
                    <FaEnvelope className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.phone && <a className="social-link phone" target="_blank" rel="noopener noreferrer" href={`tel:${siteConfig.social.phone}`}>
                    <FaPhone className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.telegram && <a className="social-link telegram" target="_blank" rel="noopener noreferrer" href={`tg://resolve?domain=${siteConfig.social.telegram}`}>
                    <FaTelegram className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.skype && <a className="social-link skype" target="_blank" rel="noopener noreferrer" href={`skype:${siteConfig.social.skype}?add`}>
                    <FaSkype className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.location && <a className="social-link location" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/place/${siteConfig.social.location}`}>
                    <FaLocationArrow className="social-icon" size="32" />
                  </a>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <About title='About' text={siteConfig.authorDescription}/>
              </Col>
              <Col xs={4} sm={4}>
                <Row>
                  <Skills title='Skills' skills={siteConfig.skills} />
                </Row>
                <Row>
                  <Interests title='Interests' interests={siteConfig.interests} />
                </Row>
              </Col>
            </Row>
            <Separator />
            <Timeline header='Experience' data={siteConfig.jobs} />
            <Separator />
            <Timeline header='Education' data={siteConfig.studies}/>
            <Separator />
            <Repositories />
          </Container>
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
  margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077B5;
  }
  
  a.social-link.instagram:hover {
    color: #C13584;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
  
  a.social-link.phone:hover {
    color: #08b037;
  }
  
  a.social-link.telegram:hover {
    color: #0088cc;
  }
  
  a.social-link.skype:hover {
    color: #00aff0;
  }
  
  a.social-link.location:hover {
    color: #dd4e41;
  }
`
