import React from 'react'
import "./rsidebar.css"
import InfoIcon from '@mui/icons-material/Info';
const Rsidebar = () => {
  return (
    <>
    <div className='rsidebar'>
      <div className='rsidebar-top'>
        <div className='rsdiebar=header'>
          <h4>Linkedin News</h4>
<InfoIcon></InfoIcon>
        </div>
        <div className='rsidebar-body'>
          <ul className='rsidebar-option'>
            <li>
              <h4>Slaying job Search Fees</h4>
              <p>6d ago 4,55 readers</p>
            </li>
            <li>
              <h4>A two pizza rules for eating</h4>
              <p>2d ago 6,12 readers</p>
            </li>
            <li>
              <h4>How to handle workspace breakup</h4>
              <p>3d ago 4,55 readers</p>
            </li>
            <li>
              <h4>FLexi leave is the new Flexi</h4>
              <p>64 ago 3,55 readers</p>
            </li>
            <li>
              <h4>Shorter hour boast productivity</h4>
              <p>1d ago 4,55 readers</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='rsidebar-bottom'>
        <div className='rsdiebar=header'>
          <h4>Today's top courses</h4>
<InfoIcon></InfoIcon>
        </div>
        <div className='rsidebar-body'>
          <ul className='rsidebar-option'>
            <li>
              <h4>leading with a heavy heat</h4>
              <p>Kay coly</p>
            </li>
            <li>
              <h4>building resillience</h4>
              <p>Tatianan kolovau</p>
            </li>
            <li>
              <h4>Critical Thinking for better judgement</h4>
              <p>3d ago 4,55 readers</p>
            </li>
            <li>
              <h4>FLexi leave is the new Flexi</h4>
              <p>64 ago 3,55 readers</p>
            </li>
            <li>
              <h4>Shorter hour boast productivity</h4>
              <p>1d ago 4,55 readers</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rsidebar