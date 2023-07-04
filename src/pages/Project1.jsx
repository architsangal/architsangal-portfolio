import ProjectGallery from '../components/projects/project1/ProjectGallery';
import ProjectHeader from '../components/projects/project1/ProjectHeader';
import ProjectInfo from '../components/projects/project1/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/project1/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext1';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				{/* <ProjectRelatedProjects /> */}
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
