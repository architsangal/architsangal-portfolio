// Import images
import mainImage from '../images/project1/image1.png';
import image2 from '../images/project1/image2.png';
import image3 from '../images/project1/image3.png';
import image4 from '../images/project1/image4.png';
import image5 from '../images/project1/image5.png';
import image6 from '../images/project1/image6.png';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Courier Management System',
		publishDate: 'May, 2023',
		tags: 'DevOps',
	},
	ProjectImages: [
		{
			id: 5,
			title: 'ELK',
			img: image5,
		},
		{
			id: 2,
			title: 'mobile image',
			img: image2,
		},
		{
			id: 4,
			title: 'grafana image',
			img: image4,
		},
		{
			id: 1,
			title: 'cover image',
			img: mainImage,
		},
		{
			id: 3,
			title: 'tablet image',
			img: image3,
		},
		{
			id: 6,
			title: 'mobile again',
			img: image6,
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Git',
					'GitHub',
					'JUnit',
					'Mockito Core',
					'Jenkins', 
					'Docker',
					'Ansible',
					'ELK', 'Prometheus',
					'Grafana',
					'React', 
					'SpringBoot',
					'NoSQL',
					'JavaScript',
				],
			},
		],
		ProjectDetailsHeading: 'About The Project',
		ProjectDetails: [
			{
				id: 4,
				details:
					'A comprehensive solution that makes it easier to receive and pick up packages on campus is the courier management application that our team created for our college, IIIT Bangalore. The application is made to meet the needs of students, faculty, staff members, and administrators who need to manage packages that need to be picked up on college property.'
			},
			{
				id: 5,
				details:
					'Users of the application can easily track packages thanks to its responsive and user-friendly interface.'
			},
			{
				id: 6,
				details:
					'Numerous features offered by the courier management application guarantee effective management of package delivery. The user\'s ability to track packages is one of the application\'s most crucial features. Users can receive notifications about the status of their packages, including when the owner or someone acting on their behalf received them as well as when the admin received them from the delivering company. The application includes automatic notifications that keep users updated on the status of their package, ensuring that users are always aware of the status of their package. Email notifications enable users to stay informed about the status of their packages at all times. Additionally, this feature reduces the possibility of packages getting misplaced or lost.'
			},
			{
				id: 7,
				details:
					'Admin has more functionality and has more control over the package information. Consequently, a feature for tracking package history is also included in the admin\'s side courier management application. With the help of this feature, administrators can view the history of their packages, including the times that they were picked up and delivered. Only the administrator has the ability to add packages and mark them as received. There are also numerous additional features.'
			},
			{
				id: 8,
				details:
					'Overall, the courier management software created for our college is a useful and easy-to-use application that streamlines the process of adding and receiving packages on campus. The college community can reduce errors and save time by using this application to track and deliver packages manually.'
			},
			{
				id: 1,
				details:
					'A full stack project, which included, frontend, backend, databases,testing, containerization and deployment, logging. All these tasks were automated. The frontend was completely responsive.'
			},
			{
				id: 2,
				details:
					'Implemented all the CRUD functionalities, security features like JWT authentication (authorization and authentication i.e. role-based access), OTP verification for new users, notification system via mail, search functionality, continuous monitoring.'
			},
			{
				id: 3,
				details:
					'Ingress has been implemented to make frontend and backend deploy ready.',
			},
		],
	},
};
