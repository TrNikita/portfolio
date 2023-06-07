import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Deck } from '@/shared/ui/Deck/Deck';
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

	const cards = [
		'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
		// Photo,
	];

	return (
		<div id={id} className={classNames(cls.About, {}, [className])}>
			<div className={cls.textBlock}>
				<Text
					align={TextAlign.CENTER}
					size={TextSize.L}
					title={t('aboutTitle')}
					text={t('aboutText')}
				/>
			</div>
			<div className={cls.imageBlock}>
				<Deck />
				<Image src={Photo} />
			</div>
		</div>
	);
});
