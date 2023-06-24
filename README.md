# Portfolio

This is my portfolio website. It is built with React and hosted on GitHub Pages.

		// "start": "react-scripts --openssl-legacy-provider start",
https://www.youtube.com/watch?v=Q9n2mLqXFpU

https://www.youtube.com/watch?v=336gNj9V8qE

## To add a new project

- Add a route path in `src/App.js`

```
const ProjectSingle1 = lazy(() => import('./pages/Project1.jsx'));

<Route
	path="projects/project1"
	element={<ProjectSingle1 />}
/>

```

- Add a json object to the project in `src/data/projects.js`

```
{
		id: 1,
		link:"/projects/project1",
		title: 'Google Health Platform',
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
```

- Add a .jsx file in `src/pages/` with name like `Project1.jsx` so the path will be `src/pages/Project1.jsx`. And replace 1 with the project number.

```
import ProjectGallery from '../components/projects/project1/ProjectGallery';
import ProjectHeader from '../components/projects/project1/ProjectHeader';
import ProjectInfo from '../components/projects/project1/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/project1/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext1';
```

- Add a .jsx file in `src/context/` with name like `SingleProjectContext1.jsx` so the path will be `src/context/SingleProjectContext1.jsx`. And replace 1 with the project number.

```
import { singleProjectData as singleProjectDataJson } from '../data/project1Data';
```

- Add a folder in `src/components/projects/` with name like `project1` so the path will be `src/components/projects/project1`. And replace 1 with the project number. Update the imports in various files:

```
import projectContext from '../../../context/SingleProjectContext1';
import SingleProjectContext from '../../../context/SingleProjectContext1';
```