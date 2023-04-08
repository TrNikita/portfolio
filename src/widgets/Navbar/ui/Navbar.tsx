import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<Text
				className={cls.appName}
				title={t('Название сайта')}
				theme={TextTheme.INVERTED}
			/>
			<AppLink
				to={RoutePath.main}
				theme={AppLinkTheme.SECONDARY}
				className={cls.createBtn}
			>
				{t('Main')}
			</AppLink>
		</header>
	);
});

export default Navbar;
