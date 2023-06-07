import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Image.module.scss';

interface ImageProps {
	src: string;
	className?: string;
	circle?: boolean;
}

export const Image = memo((props: ImageProps) => {
	const { src, className, circle } = props;

	const mods: Mods = {
		[cls.circle]: circle,
	};

	return (
		<img
			className={classNames(cls.Image, mods, [className])}
			src={src}
			alt="addedPhoto"
			draggable={false}
		/>
	);
});
