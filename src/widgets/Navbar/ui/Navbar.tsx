import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import data from '@/shared/data';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ScrollToLink } from '@/shared/ui/ScrollToLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();

	return (
		<header id="navbar" className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.navItems}>
				{Object.values(data).map((block) => (
					<ScrollToLink key={block.id} to={block.id}>
						{t(block.title)}
					</ScrollToLink>
				))}
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher className={cls.theme} />
				<LangSwitcher className={cls.lang} />
			</div>
		</header>
	);
});

export default Navbar;
