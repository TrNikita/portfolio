import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BurgerButton.module.scss';

interface BurgerButtonProps {
	className?: string;
	onClick?: () => void;
	checked?: boolean;
}

export const BurgerButton = memo((props: BurgerButtonProps) => {
	const { className, onClick, checked } = props;

	return (
		<div className={classNames(cls.BurgerButton, {}, [className])}>
			<input
				type="checkbox"
				id="menu"
				onClick={onClick}
				checked={checked}
			/>
			<label htmlFor="menu">
				<div></div>
				<div></div>
				<div></div>
			</label>
		</div>
	);
});
