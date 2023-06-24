import timeLineElements from './TimeLineElements';
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
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{"Education"}
			</p>

			<VerticalTimeline 
				className='text-primary-dark'
				// lineColor= {activeTheme === 'dark' ? "#06D6A0" : "#ffffff"}
			>
			{timeLineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              className="primary-dark dark:primary-light"
              key={element.key}
              date={element.date}
              dateClassName="date"
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
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
			</VerticalTimeline>
		</div>
	);
};

export default AboutClients;
