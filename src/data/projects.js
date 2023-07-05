// Import images
import project1Main from '../images/project1/image1.png';
import project2Main from '../images/project2/logocolor.png';
import project3Main from '../images/project3/QuestionAddSub.png';

import WebImage1 from '../images/web-project-1.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		link:"/projects/project1",
		title: 'Courier Management System',
		category: 'DevOps Project',
		img: project1Main,
		ProjectHeader: {
			title: 'Courier Management System',
			publishDate: 'May, 2023',
			tags: 'DevOps Project',
		},
	},
	{
		id: 2,
		link:"/projects/project2",
		title: 'FoodFast',
		category: 'Mobile Application',
		img: project2Main,
		ProjectHeader: {
			title: 'IIITB Canteen App',
			publishDate: 'March, 2021',
			tags: 'Mobile Application',
		},
	},
	{
		id: 3,
		link:"/projects/project3",
		title: 'Question Paper Management System',
		category: 'Web Application',
		img: project3Main,
	},
	// {
	// 	id: 4,
	// 	link:"/projects/single-project",
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: UIImage2,
	// },
	// {
	// 	id: 5,
	// 	link:"/projects/single-project",
	// 	title: 'React Social App',
	// 	category: 'Mobile Application',
	// 	img: MobileImage1,
	// },
	// {
	// 	id: 6,
	// 	link:"/projects/single-project",
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: WebImage1,
	// },
	// {
	// 	id: 7,
	// 	link:"/projects/single-project2",
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: WebImage1,
	// },
];
