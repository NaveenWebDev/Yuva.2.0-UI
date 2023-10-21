import React from 'react'
import satyaIcon from "../assests/satmew-jayte-logo-FBBEBAEA31-seeklogo 2.svg";
import "../Css/univercity.css"
import arrow from "../assests/Vector.svg"

const Universities = () => {
  return (
    <>
        <div className="container satya">
            <h2 className='text-center fw-bolder mb-5'>We are supported by more than 20 ministries and universities</h2>

            <div className="univercityIcons">
                <div className="row text-center">
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF EDUCATION</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF AYUSH</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF CULTURE</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF DEFENCE</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF YOUTH AFFAIRS AND SPORTS</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF ENVIRONMENT, FORESTS & CLIMATE CHANGE</p>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF EDUCATION</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF AYUSH</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF CULTURE</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF DEFENCE</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF YOUTH AFFAIRS AND SPORTS</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={satyaIcon} alt="satyaicon" />
                        <p>MINISTRY OF ENVIRONMENT, FORESTS & CLIMATE CHANGE</p>
                    </div>
                </div>
            </div>

            <button className='d-flex align-items-center gap-2 seeMore border-0 text-white px-3 py-1'>See More 
            <span className='btnIcon'> 
                <img src={arrow} alt="arrow" height="100%" width="100%" />
                <img src={arrow} alt="arrow" height="100%" width="100%" />
            </span> 
            </button>

        </div>
    </>
  )
}

export default Universities