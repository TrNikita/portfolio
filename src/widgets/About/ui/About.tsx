import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Image } from '@/shared/ui/Image/Image';
import cls from './About.module.scss';
import Photo from '../../../../public/photo.png';

interface AboutProps {
	id: string;
	className?: string;
	title?: string;
}

export const About = memo((props: AboutProps) => {
	const { t } = useTranslation();
	const { className, id } = props;

	return (
		<div id={id} className={classNames(cls.About, {}, [className])}>
			<h1 className={cls.textBlock}>
				{/*
				чем ты можешь быть реально полезен для бизнеса

				разрабатывать надежные стабильные масштабируемые проекты
				*/}
				Hi 👋, I'm Nikita Trokhov Frontend Developer
			</h1>
			<div className={cls.imageBlock}>
				<Image src={Photo} />
			</div>
		</div>
	);
});
