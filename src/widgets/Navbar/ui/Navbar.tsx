import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			{t('Главная')}
		</header>
	);
});

export default Navbar;
