import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {HouzzIcon} from '../components/houzzIcon' 
const SocialIcons = () => (
    <div className="d-flex justify-content-center" style={{width: '100%'}}>
        {/* <SocialIcon url="https://twitter.com/Gopi132M" className="mr-3"/> */}
        <a href="https://www.houzz.com/pro/surfacegroup/"><HouzzIcon /></a>
        {/* <SocialIcon url="https://www.houzz.com/professionals/tile-stone-and-countertops/surface-group-international-pfvwus-pf~1325519544" className="mr-3"/> */}
        <SocialIcon url="https://www.linkedin.com/in/greg-starr-7b01016/"/>
        <SocialIcon url="https://www.instagram.com/surfacegroup/?hl=en" className="ml-3"/>
        <SocialIcon url="https://hu.pinterest.com/surfacegroup/" className="ml-3"/>


    </div>
)

export default SocialIcons