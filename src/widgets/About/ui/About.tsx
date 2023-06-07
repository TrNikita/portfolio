import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Image } from '@/shared/ui/Image/Image';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import cls from './About.module.scss';
import Photo from '../../../../public/photo.png';

interface AboutProps {
	id: string;
	className?: string;
}

export const About = memo((props: AboutProps) => {
	const { t } = useTranslation();
	const { className, id } = props;

	return (
		<div id={id} className={classNames(cls.About, {}, [className])}>
			<div className={cls.textBlock}>
				<Text
					size={TextSize.L}
					align={TextAlign.CENTER}
					title={"Hi 👋, I'm Nikita Trokhov Frontend Developer"}
				/>
				<Text
					align={TextAlign.CENTER}
					size={TextSize.M}
					title={
						'Уже больше 1,5 лет я увлечен веб-разработкой. Свободное время люблю проводить вместе с семьей'
					}
				/>
			</div>
			<div className={cls.imageBlock}>
				<Image src={Photo} />
			</div>
		</div>
	);
});
