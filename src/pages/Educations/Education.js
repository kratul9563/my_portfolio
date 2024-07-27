import React from 'react';
import { FaSchool } from "react-icons/fa"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = () => {
  return (
    <>
      <div className='education' id='educations'>
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           Education Details
        </h2>
        <hr />
      

     <VerticalTimeline lineColor='#1e1e2c'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - present"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Master of Computer Applications (MCA) </h3>
    <h4 className="vertical-timeline-element-subtitle">Maulana Azad National Institute of Technology, Bhopal, India</h4>
    <p>
      CGPA : 8.05/10.00
    </p>
  </VerticalTimelineElement>

        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019 - 2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Computer Science (B.sc)</h3>
    <h4 className="vertical-timeline-element-subtitle">SoftVision Institute of Technology & Science, Indore, India</h4>
    <p>
      Secured 83.09% in Bachelor of Computer Science (B.sc)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2018"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate</h3>
    <h4 className="vertical-timeline-element-subtitle">Priya Darshini Public Inter College, Kanpur, India</h4>
    <p>
      Secured 83.8% in Intermediate.
    </p>
  </VerticalTimelineElement>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2016"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Matriculation</h3>
    <h4 className="vertical-timeline-element-subtitle">Priya Darshini Public Inter College, Kanpur, India</h4>
    <p>
      Secured 87.5% in Matriculation
    </p>
  </VerticalTimelineElement>

     </VerticalTimeline>
    </div>
    </>
  )
}

export default Education