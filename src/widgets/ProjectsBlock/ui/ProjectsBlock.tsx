import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Project, ProjectCard } from '@/entities/Project';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProjectsBlock.module.scss';

interface ProjectsBlockProps {
	id: string;
	data: Project[];
	title?: string;
	className?: string;
}

export const ProjectsBlock = memo((props: ProjectsBlockProps) => {
	const { t } = useTranslation();
	const { className, data, id, title } = props;

	console.log('data', data);

	return (
		<div id={id} className={classNames(cls.ProjectsBlock, {}, [className])}>
			{title ? t(title) : null}
			{data.map((project) => (
				<ProjectCard project={project} key={project.id} />
			))}
		</div>
	);
});
