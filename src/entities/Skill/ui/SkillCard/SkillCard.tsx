import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import cls from './SkillCard.module.scss';
import { Skill } from '../../model/types/skill';


interface SkillCardProps {
	skill: Skill;
	className?: string;
}

export const SkillCard = memo((props: SkillCardProps) => {
	const { t } = useTranslation();
	const { className, skill } = props;

	return (
		<div className={classNames(cls.SkillCard, {}, [className])}>
			<Card>
				{skill?.title}
				{skill.icon ? (
					<Icon Svg={skill?.icon}/>
				) : null}
			</Card>
		</div>
	);
});
