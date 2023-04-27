import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProjectCard.module.scss';
import { Project } from '../model/types/project';

interface ProjectCardProps {
	className?: string;
	project: Project
}

export const ProjectCard = memo((props: ProjectCardProps) => {
	const { t } = useTranslation();
	const { className, project } = props;

	return (
		<div className={classNames(cls.ProjectCard, {}, [className])}>
			{project.title}
		</div>
	);
});
