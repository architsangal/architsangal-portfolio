import timeLineElementsEducation from './TimeLineElementsEducation';
import timeLineElementsWork  from './TimeLineElementsWork';

import {ReactComponent as WorkIcon} from '../../images/work.svg';
import {ReactComponent as SchoolIcon} from '../../images/school.svg';
import {
	VerticalTimeline,
	VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
  
const AboutClients = () => {

	let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
		<div className="mt-10 sm:mt-20">
    <div className="container mx-auto">
        <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
					<p className="font-general-medium text-4xl sm:text-4xl  text-center text-primary-dark dark:text-primary-light">{"Experience"}
		    	</p>
          <br></br>

			<VerticalTimeline 
				className='text-primary-dark'
			>
			{timeLineElementsWork.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          let skills =
            element.skill !== undefined &&
            element.skill !== null &&
            element.skill !== "";


          return (
            <VerticalTimelineElement
              className="primary-dark dark:primary-light"
              key={element.key}
              date={element.date}
              dateClassName="date-work"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title bold-text">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle ">
                {element.location}
              </h5>

              <p id="description">{element.description}</p>

              {skills && (
                <p className= "workPercentage" id="skill">{element.skill}</p>
              )}

              {showButton && (
                <div>
                <br></br>
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.link}
                >
                  {element.buttonText}
                </a>
                <br></br>
                </div>
              )}
            </VerticalTimelineElement>
          );
        })}
			</VerticalTimeline>
        </div>
        </div>
        <div className="container mx-auto">
        <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">

        <p className="font-general-medium text-4xl sm:text-4xl  text-center text-primary-dark dark:text-primary-light">{"Education"}
		    	</p>
          <br></br>

			<VerticalTimeline 
				className='text-primary-dark'
			>
			{timeLineElementsEducation.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          let percentage =
            element.percentage !== undefined &&
            element.percentage !== null &&
            element.percentage !== "";

          return (
            <VerticalTimelineElement
              className="primary-dark dark:primary-light"
              key={element.key}
              date={element.date}
              dateClassName="date-education"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title bold-text">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle ">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              
              {percentage && (
                <p className= "schoolPercentage" id="percentage">{element.percentage}</p>
              )}

              {showButton && (
                <div>
                <br></br>
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.link}
                >
                  {element.buttonText}
                </a>
                <br></br>
                </div>
              )}

            </VerticalTimelineElement>
            
          );
        })}
			</VerticalTimeline>
      </div>
            </div>
		</div>
	);
};

export default AboutClients;
