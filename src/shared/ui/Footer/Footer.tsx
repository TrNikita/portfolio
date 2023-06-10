import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Footer.module.scss';

interface FooterProps {
	className?: string;
}

export const Footer = memo((props: FooterProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<footer className={classNames(cls.Footer, {}, [className])}>
			©{new Date().getFullYear()} {t('Nikita Trokhov')}
		</footer>
	);
});
