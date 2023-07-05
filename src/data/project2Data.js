// Import images
import Image1 from '../images/project2/image1.png';
import Image2 from '../images/project2/image2.png';
import Image3 from '../images/project2/image3.png';
import Image4 from '../images/project2/image4.png';
import Image5 from '../images/project2/image5.png';
import Image6 from '../images/project2/image6.png';
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
		title: 'FoodFast: IIITB Canteen App',
		publishDate: 'March, 2021',
		tags: 'Mobile Application (Cross Platform)',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Login Page',
			img: Image1,
		},
		{
			id: 4,
			title: 'Orders Page',
			img: Image2,
		},
		{
			id: 2,
			title: 'Item Selection Page',
			img: Image3,
		},
		{
			id: 3,
			title: 'User Info Page',
			img: Image4,
		},
		{
			id: 5,
			title: 'User Info Page',
			img: Image5,
		},
		{
			id: 3,
			title: 'User Info Page',
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
					'Flutter',
					'FireBase',
					'Dart',
					'Figma',
				],
			},
		],
		ProjectDetailsHeading: 'About The Project',
		ProjectDetails: [
			{
				id: 1,
				details:
					'I am the creator and the team leader of the open source application called FoodFast. It was started by me as a fun project, as it progressed, it got accepted in IIITB Summer Of Code in 2022. It aims to reduce the waiting time of the order. The application has both user side and manager side functionalities. We used a framework called flutter due to its cross platform support for Web, iOS and Android. During the IIITB Summer of code, I guided and mentored 2 students. This application is right now in testing phase more specifically stress testing to test that if it can handle the heavy user surge which might be due to ordering at peak hours, like 12 am common senior in college : )',
			},
			{
				id: 2,
				details:
					'For the backend, we have used firebase. We also have used authentication and authorisation i.e. role-based access to the application.',
			},
			{
				id: 3,
				details:
					'Users can add the items into the cart, and can place an order. The store owner can accept or reject an order, open or close the store, manage the inventory of the items.',
			},
			{
				id: 4,
				details:
					'Booking orders in advance will help manage crowding and reduce waiting time. You can track the status of your order through your token number due to a token based tracking system. Order status is updated in real-time by the manager.',
			},
			{
				id: 5,
				details:
					'The minimal design facilitates easy navigation with simple UI.',
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
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
				link: '/projects/project1',
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
