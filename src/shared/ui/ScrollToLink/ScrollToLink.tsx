import React, { memo, ReactNode, useEffect, useState } from 'react';
import { Link, LinkProps } from 'react-scroll';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToLink.module.scss';

interface ScrollToLinkProps extends LinkProps {
	className?: string;
	children?: ReactNode;
}

export const ScrollToLink = memo((props: ScrollToLinkProps) => {
	const { to, className, children } = props;

	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		const navbar = document.getElementById('navbar');
		if (navbar) {
			const navbarHeight = navbar.clientHeight;
			setNavbarHeight(navbarHeight);
		}
	}, []);

	const mods: Mods = {
		[cls.editing]: true,
	};

	return (
		<>
			<Link
				to={to}
				hashSpy
				smooth
				duration={500}
				// offset={-navbarHeight}
				className={classNames(cls.ScrollToLink, {}, [className])}
			>
				{children}
			</Link>
		</>
	);
});
