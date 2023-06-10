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
			<label htmlFor="check">
				<input onClick={onClick} type="checkbox" id="check" checked={checked} />
				<span></span>
				<span></span>
				<span></span>
			</label>
		</div>
	);
});
