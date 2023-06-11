import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { List } from '@/shared/ui/List';
import cls from './ProjectCard.module.scss';
import { Project } from '../model/types/project';

interface ProjectCardProps {
	className?: string;
	project: Project;
}

export const ProjectCard = memo((props: ProjectCardProps) => {
	const { t } = useTranslation();
	const { className, project } = props;

	return (
		<div className={classNames(cls.ProjectCard, {}, [className])}>
			<Card>{project.title}</Card>
			{project.description}
			{project.gitLink}
			{project.mainLink}
			{project.tools && <List items={project.tools} />}
		</div>
	);
});
