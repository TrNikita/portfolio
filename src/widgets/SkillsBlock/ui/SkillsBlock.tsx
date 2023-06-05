import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Skill, SkillCard } from '@/entities/Skill';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SkillsBlock.module.scss';

export interface SkillsBlockProps {
	id: string;
	data: Skill[];
	title?: string;
	className?: string;
}

export const SkillsBlock = memo((props: SkillsBlockProps) => {
	const { t } = useTranslation();
	const { className, data, id, title } = props;

	return (
		<div id={id} className={classNames(cls.SkillsBlock, {}, [className])}>
			<div className={cls.title}>{title ? t(title) : null}</div>
			<div className={cls.skills}>
				{data.map((skill) => (
					<SkillCard skill={skill} key={skill.id} />
				))}
			</div>
		</div>
	);
});
