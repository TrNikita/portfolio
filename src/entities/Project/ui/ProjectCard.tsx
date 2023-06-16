import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
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
			<Card theme={CardTheme.OUTLINED}>
				<Card theme={CardTheme.NORMAL} className={cls.title}>
					{project.title}
				</Card>
				<div className={cls.description}>
					{t(`${project.description}`)}
				</div>
				<div className={cls.linksBlock}>
					{project.mainLink && (
						<a
							href={project.mainLink}
							target="_blank"
							rel="noreferrer"
						>
							<Card theme={CardTheme.SECOND} className={cls.link}>
								{t('Демо')}
							</Card>
						</a>
					)}
					{project.gitLink && (
						<a
							href={project.gitLink}
							target="_blank"
							rel="noreferrer"
						>
							<Card theme={CardTheme.SECOND} className={cls.link}>
								{t('Git')}
							</Card>
						</a>
					)}
				</div>
				<div className={cls.stack}>
					{t('STACK')}:
					{project.tools && <List items={project.tools} />}
				</div>
			</Card>
		</div>
	);
});
