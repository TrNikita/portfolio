import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './About.module.scss';

interface AboutProps {
	className?: string;
}

export const About = memo((props: AboutProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<div
			className={classNames(cls.About, {}, [className])}
		>
			<div>
				Hi 👋, I'm Nikita Trokhov
				Frontend Developer
			</div>
		</div>
	);
});
