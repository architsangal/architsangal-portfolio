// Import images
import Image1 from '../images/project3/registration.png';
import Image2 from '../images/project3/login.png';
import Image3 from '../images/project3/QuestionAdd.png';
import Image4 from '../images/project3/QuestionAddSub.png';
import Image5 from '../images/project3/QuestionPaper.png';
import Image6 from '../images/project3/LogOut.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Question Paper Management System',
		publishDate: 'November, 2022',
		tags: 'Web Application',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Registration Page',
			img: Image1,
		},
		{
			id: 4,
			title: 'Login Page',
			img: Image2,
		},
		{
			id: 2,
			title: 'Adding MCQ Questions Page',
			img: Image3,
		},
		{
			id: 3,
			title: 'Adding Subjective Questions Page',
			img: Image4,
		},
		{
			id: 5,
			title: 'Question Paper Generation Page',
			img: Image5,
		},
		{
			id: 3,
			title: 'LogOut Page',
			img: Image6,
		},
	],
	ProjectInfo: {
		// ClientHeading: 'About Client',
		CompanyInfo: [
			// {
			// 	id: 1,
			// 	title: 'Name',
			// 	details: 'Hello Ltd',
			// },
			// {
			// 	id: 2,
			// 	title: 'Services',
			// 	details: 'UI Design & Frontend Development',
			// },
			// {
			// 	id: 3,
			// 	title: 'Website',
			// 	details: 'https://company.com',
			// },
			// {
			// 	id: 4,
			// 	title: 'Phone',
			// 	details: '555 8888 888',
			// },
		],
		// ObjectivesHeading: 'Objective',
		// ObjectivesDetails:
			// 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React',
					'Spring Boot',
					'Eureka Server',
				],
			},
		],
		ProjectDetailsHeading: 'About The Project',
		ProjectDetails: [
			{
				id: 1,
				details:
					'This was a team project that was built to demonstrate microservices architecture. We designed the architecture of this project.',
			},
			{
				id: 2,
				details:
					'We created three microservices. Firstly, login and registration for the authors. Second, to carry out CRED operations on the question bank (including Versioning System, to keep a track of the updated and deleted questions). Lastly, for generating the question paper according to the constraints provided.',
			},
			{
				id: 3,
				details:
					'My part was to create the versioning system. An example of the same could be: the question paper is generated randomly, and  we had a question which was MCQ in an exam. The question setter now wants to change the question from type MCQ to numerical. In further exams, that question will come under the section of numerical type. But, there may be laws or necessary use cases to keep old questions for record or for re-checking purposes. So both the questions must be kept in the database. So when we update the question we also attach the version with the question, so no matter when the exam is being conducted, we can update the question at any time, which interferes with the question papers of the exams that have concluded earlier or which are in progress right now.',
			},
			{
				id: 4,
				details:
					'A stub demonstration website to test microservices was also made. Eureka Server was used to register and discover the services, and Hybernate as the JPA implementation.',
			},
		],
		SocialSharingHeading: '',
		SocialSharing: [
			// {
			// 	id: 1,
			// 	name: 'Twitter',
			// 	icon: <FiTwitter />,
			// 	url: 'https://twitter.com/realstoman',
			// },
			// {
			// 	id: 2,
			// 	name: 'Instagram',
			// 	icon: <FiInstagram />,
			// 	url: 'https://instagram.com/realstoman',
			// },
			// {
			// 	id: 3,
			// 	name: 'Facebook',
			// 	icon: <FiFacebook />,
			// 	url: 'https://facebook.com/',
			// },
			// {
			// 	id: 4,
			// 	name: 'LinkedIn',
			// 	icon: <FiLinkedin />,
			// 	url: 'https://linkedin.com/',
			// },
			// {
			// 	id: 5,
			// 	name: 'Youtube',
			// 	icon: <FiYoutube />,
			// 	url: 'https://www.youtube.com/c/StomanStudio',
			// },
		],
	},
	RelatedProject: {
		// title: 'Related Projects',
		Projects: [
			// {
			// 	id: 1,
			// 	title: 'Mobile UI',
			// 	img: Image4,
			// 	link: '/projects/project1',
			// },
			// {
			// 	id: 2,
			// 	title: 'Web Application',
			// 	img: Image5,
			// },
			// {
			// 	id: 3,
			// 	title: 'UI Design',
			// 	img: Image6,
			// },
			// {
			// 	id: 4,
			// 	title: 'Kabul Mobile App UI',
			// 	img: Image3,
			// },
		],
	},
};
