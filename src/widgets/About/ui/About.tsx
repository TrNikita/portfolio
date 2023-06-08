import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Deck } from '@/shared/ui/Deck/Deck';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import cls from './About.module.scss';
import Photo_1 from '../../../../public/photo1.png';
import Photo_2 from '../../../../public/photo2.png';

interface AboutProps {
	id: string;
	className?: string;
}

export const About = memo((props: AboutProps) => {
	const { t } = useTranslation();
	const { className, id } = props;

	const cards = [Photo_2, Photo_1];

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
			<Deck cards={cards} className={cls.imageBlock} />
		</div>
	);
});
