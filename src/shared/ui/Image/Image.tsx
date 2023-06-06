import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Image.module.scss';

interface ImageProps {
	src: string;
	className?: string;
}

export const Image = memo((props: ImageProps) => {
	const { src, className } = props;

	return (
		<img
			className={classNames(cls.Image, {}, [className])}
			src={src}
			alt="addedPhoto"
		/>
	);
});
