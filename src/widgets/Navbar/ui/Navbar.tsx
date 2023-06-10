import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import data from '@/shared/data';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { BurgerButton } from '@/shared/ui/BurgerButton/BurgerButton';
import { ScrollToLink } from '@/shared/ui/ScrollToLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const mods: Mods = {
		[cls.collapsed]: collapsed,
	};

	return (
		<>
			<header
				id="navbar"
				className={classNames(cls.Navbar, {}, [className])}
			>
				<div className={classNames(cls.navScreen, mods, [])}>
					<div className={cls.navItems}>
						{Object.values(data).map((block) => (
							<ScrollToLink
								key={block.id}
								to={block.id}
								onClick={onToggle}
							>
								{t(block.title)}
							</ScrollToLink>
						))}
					</div>

					<div className={cls.switchers}>
						<ThemeSwitcher className={cls.theme} />
						<LangSwitcher className={cls.lang} />
					</div>
				</div>

				<BurgerButton
					className={cls.BurgerButton}
					onClick={onToggle}
					checked={collapsed}
				/>
			</header>
		</>
	);
});
