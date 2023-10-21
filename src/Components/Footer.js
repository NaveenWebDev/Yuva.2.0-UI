import React from 'react';
import "../Css/footer.css";
import yuva from "../assests/yuvamanthan top 4.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <>
        <div className="container">
            <div className="footerItems">
                <div className="d-flex justify-content-between">
                    <div className='footerBox boxOne p-3'>
                        <img src={yuva} alt="yuva" />

                        <p>A platform to drive change by creating awareness on issues that matter and build capacity to navigate the changing economic scenarios.</p>

                        <p>Follow Us On</p>
                        <div className='icons d-flex gap-3 justify-content-between align-items-center'>
                            <FacebookIcon sx={{height:'43px', width:'43px'}} />
                            <i class="fa-brands fa-square-x-twitter"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <InstagramIcon sx={{height:'43px', width:'43px'}} />
                            <YouTubeIcon sx={{height:'43px', width:'43px'}} />
                        </div>
                    </div>
                    <div className='footerBox box'>
                        <p className='fw-bolder'>Events</p>
                        <p>Model G20</p>
                        <p>Model G20</p>
                        <p>Model G20</p>
                    </div>
                    <div className='footerBox box'>
                        <p className='fw-bolder'>Events</p>
                        <p>Model G20</p>
                        <p>Model G20</p>
                        <p>Model G20</p>
                    </div>
                    <div className='footerBox box'>
                        <p className='fw-bolder'>Events</p>
                        <p>Model G20</p>
                        <p>Model G20</p>
                        <p>Model G20</p>
                    </div>
                    <div className='footerBox box'>
                        <p className='fw-bolder'>Events</p>
                        <p>Model G20</p>
                        <p>Model G20</p>
                        <p>Model G20</p>
                    </div>
                 
                </div>
            </div>
            <div className="lowerFooter mt-3 d-flex align-items-center pt-3">
            <p>
                Copyright <CopyrightIcon/> {date}
            </p>
            <p>All Rights Reserved. Registration on or use of this site constitutes acceptance of our Terms and Conditions Privacy Policy Accessibility Statement</p>
            </div>
        </div>
    </>
  )
}

export default Footer