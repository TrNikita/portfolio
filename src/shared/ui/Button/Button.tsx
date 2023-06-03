import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	/**
	 * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
	 */
	theme?: ButtonTheme;
	/**
	 * Размер кнопки в соответствии с дизайн системой
	 */
	size?: ButtonSize;
	/**
	 * Флаг, отвечающий за работу кнопки
	 */
	disabled?: boolean;
	/**
	 * Содержимое кнопки
	 */
	children?: ReactNode;
	/**
	 * Увеличивает кнопку на всю свободную ширину
	 */
	fullWidth?: boolean;
	/**
	 * текст рядом с кнопкой
	 */
	title?: string;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		size = ButtonSize.M,
		disabled,
		fullWidth,
		...OtherProps
	} = props;

	const mods: Mods = {
		[cls[theme]]: true,
		[cls[size]]: true,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className])}
			disabled={disabled}
			{...OtherProps}
		>
			{children}
		</button>
	);
});
