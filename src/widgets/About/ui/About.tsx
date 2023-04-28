import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import info from '@/shared/info';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './About.module.scss';

interface AboutProps {
	className?: string;
	id: string;
	children?: ReactNode;
}

export const About = memo((props: AboutProps) => {
	const { t } = useTranslation();
	const { className, id, children } = props;
	const contacts = info.contacts;

	return (
		<div
			className={classNames(cls.About, {}, [className])}
		>
			{children}
			<div className={cls.footer}>

			</div>
		</div>
	);
});
