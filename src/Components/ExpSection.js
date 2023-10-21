import React from 'react'
import "../Css/experience.css"
import singboy from "../assests/exp/singinBoy.svg"
const ExpSection = () => {
  return (
    <>
        <div className="container py-5">
            <div className='d-flex'>
                <div className="leftexp p-3">
                    <img src={singboy} alt="singingboy" width="100%" />
                </div>
                <div className="rightexp d-flex flex-column justify-content-center p-3">

                    <h2 className='fw-bolder'>Why Experience Based Learning Method?</h2>
                    <p>An advanced program designed for individuals seeking to expand their knowledge and skills in the fields of economics</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <p>International Diplomacy</p>
                            <p>Research and Analysis</p>
                        </div>
                        <div className="col-lg-6">
                            <p>Public Speaking</p>
                            <p>Strategy Building</p>
                        </div>
                    </div>
                    <button id='learnMore' className='text-white border-0 px-4 py-2 rounded-3 mt-3'>Learn More</button>
                </div>

            </div>
        </div>
    </>
  )
}

export default ExpSection