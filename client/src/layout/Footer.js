import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import icon from './icon-circle.png';
import arrowwhite from './arrowwhite.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import linkedin from './linkedin.svg';
import medium from './medium.svg';

const LeftFooterContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: white;
    font-family: 'Lato', sans-serif;
`;

const Button = styled.button`
    border: none;
    outline: none;
    background-color: #347cbf;
    margin-left: 3px;
`;

const Subscribe = styled.div`
    display: flex;
`;

const SocialSite = styled.div`
    margin-top: 5rem;
    width: 10vw;
    display: flex;
    justify-content: space-between;
`;

const SocialImg = styled.img`
    width: 24px;
`;

const FooterContent = styled.div`
    width: 60%;
    margin: 1rem 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RightFooterContent = styled.section`
    display: flex;
    justify-content: space-between;
`;

const Ul = styled.ul`
    list-style: none;
    color: white;
    margin: 2rem;
`;

const Heading = styled.h2`
    font-family: 'Montserrat', sans-serif;
`;

class Footer extends Component {
    render() {
        return (
            <footer style={{backgroundColor: '#0A1725', display: 'flex', justifyContent: 'center'}}>
                <FooterContent>
                    <LeftFooterContent>
                        <img src={icon} style={{marginBottom: '2rem'}} alt='company-icon' />
                        <Typography><Link href="#" color='secondary'>See all services</Link></Typography>
                        <p style={{fontSize: '1.4rem'}}>Learn new. Everyday.</p>
                        <Subscribe>
                            <input style={{paddingLeft: '.5rem',paddingRight: '3rem', outline: 'none'}} type="email" placeholder="Email address" />
                            <Button type="submit"><img src={arrowwhite} alt="arrow" /></Button>
                        </Subscribe>
                        <SocialSite>
                            <a rel="noopener noreferrer" href="https://www.facebook.com/legex.in" target="_blank"><SocialImg src={facebook} alt="facebook" /></a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/legex.in/" target="_blank"><SocialImg src={instagram} alt="instagram" /></a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/legex-india/" target="_blank"><SocialImg src={linkedin} alt="linkedin" /></a>
                            <a rel="noopener noreferrer" href="https://medium.com/legex" target="_blank"><SocialImg src={medium} alt="medium" /></a>
                        </SocialSite>
                        <p style={{color: '#bdbdbd'}}>&copy; Legexhub Technology Pvt Ltd.</p>
                    </LeftFooterContent>
                    <RightFooterContent>
                        <Ul>
                            <Heading>Company</Heading>
                            <li><Link href="#" color="inherit">About us</Link></li>
                            <li><Link href="#" color="inherit">Newsroom</Link></li>
                            <li><Link href="#" color="inherit">Client Stories</Link></li>
                            <li><Link href="#" color="inherit">Resources</Link></li>
                            <li><Link href="#" color="inherit">Careers</Link></li>
                        </Ul>
                        <Ul>
                            <Heading>Offerings</Heading>
                            <li><Link href="#" color="inherit">Consulting</Link></li>
                            <li><Link href="#" color="inherit">Compliances</Link></li>
                            <li><Link href="#" color="inherit">Dispute Resolution</Link></li>
                            <li><Link href="#" color="inherit">e-Discovery</Link></li>
                            <li><Link href="#" color="inherit">Legal services</Link></li>
                        </Ul>
                        <Ul>
                            <Heading>Support</Heading>
                            <li><Link href="#" color="inherit">Help</Link></li>
                            <li><Link href="#" color="inherit">Privacy</Link></li>
                            <li><Link href="#" color="inherit">Terms</Link></li>
                            <li><Link href="#" color="inherit">Sitemap</Link></li>
                        </Ul>
                    </RightFooterContent>
                </FooterContent>
            </footer>
        )
    }
}

export default Footer;