import React from 'react'
import {Link} from 'react-router-dom'
import logo1 from '../../images/work/1.png'
import logo2 from '../../images/work/2.png'
import logo3 from '../../images/work/3.png'
import logo4 from '../../images/work/4.png'
import SectionTitle from '../SectionTitle/SectionTitle'

const Expriences = [
    {
        date: '2009 - 2015',
        logo: logo1,
        position: 'Public Elementary School 01 Pasiran Jaya',
        companyName: 'Tulang Bawang, Lampung',
        workFrom: '',
    },
    {
        date: '2015 - 2018',
        logo: logo2,
        position: 'Public Junior High School 01 Dente Teladas',
        companyName: 'Tulang Bawang, Lampung',
        workFrom: '',
    },
    {
        date: '2018 - 2021',
        logo: logo3,
        position: 'Public Senior High School 02 Dente Teladas',
        companyName: 'Tulang Bawang, Lampung',
        workFrom: '',
    },
    {
        date: '2021 - 2025',
        logo: logo4,
        position: 'Sanata Dharma University',
        companyName: 'Sleman, Special Region of Yogyakarta',
        workFrom: '',
    },

]


const Exprience = (props) => {
    return (
        <div className="wpo-work-area section-padding">
            <div className="container">
                <SectionTitle Title={'My Education'} description="The following is my educational journey from elementary school to college, which formed the basis of my knowledge and skills in IT and design."  />
                <div className="wpo-work-wrap">
                    {Expriences.map((exprience, exp) => (
                        <div className="wpo-work-item" key={exp}>
                            <ul>
                                <li className="date">{exprience.date}</li>
                                <li className="logo"><img src={exprience.logo} alt=""/></li>
                                <li className="position">{exprience.position} <span>{exprience.companyName} <span>{exprience.workFrom}</span></span></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Exprience;