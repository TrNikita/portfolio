import React, { memo, ReactNode, useEffect, useState } from 'react';
import { Link, LinkProps } from 'react-scroll';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToLink.module.scss';

interface ScrollToLinkProps extends LinkProps {
	className?: string;
	children?: ReactNode;
	onClick?: () => void;
}

export const ScrollToLink = memo((props: ScrollToLinkProps) => {
	const { to, className, children, onClick } = props;

	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		const navbar = document.getElementById('navbar');
		if (navbar) {
			const navbarHeight = navbar.clientHeight;
			setNavbarHeight(navbarHeight);
		}
	}, []);

	return (
		<>
			<Link
				to={to}
				hashSpy
				smooth
				duration={500}
				className={classNames(cls.ScrollToLink, {}, [className])}
				onClick={onClick}
			>
				{children}
			</Link>
		</>
	);
});
