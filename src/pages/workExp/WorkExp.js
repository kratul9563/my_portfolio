import React from 'react'
import './WorkExp.css';
import { FaSchool } from "react-icons/fa"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkExp = () => {
  return (
    <>
      <div className='work' id='workexp'>
        <div className='container work-exp'>
           <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>COURSEWORK</h2>
           <hr/>
        </div>
           <VerticalTimeline lineColor='#1e1e2c'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#138781', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid  #138781' }}
    
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaSchool />}
  >
     <h3 className="vertical-timeline-element-title">MCA </h3>
    <h4 className="vertical-timeline-element-subtitle">National Institute of Technology, Bhopal, Madhya Pradesh</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> 
       

  </VerticalTimelineElement>

        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#138781', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid  #138781' }}
    
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Bsc Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle">National Institute of Technology, Bhopal, Madhya Pradesh</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

     </VerticalTimeline>
      </div>
    </>
  );
}

export default WorkExp