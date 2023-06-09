import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BurgerButton.module.scss';

interface BurgerButtonProps {
	className?: string;
	onClick?: () => void;
}

export const BurgerButton = memo((props: BurgerButtonProps) => {
	const { className, onClick } = props;

	return (
		<div className={classNames(cls.BurgerButton, {}, [className])}>
			<label htmlFor="check">
				<input onClick={onClick} type="checkbox" id="check" />
				<span></span>
				<span></span>
				<span></span>
			</label>
		</div>
	);
});
