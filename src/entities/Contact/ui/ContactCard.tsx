import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ContactCard.module.scss';
import { Contact } from '../model/types/types';

interface ContactCardProps {
	className?: string;
	contact: Contact
}

export const ContactCard = memo((props: ContactCardProps) => {
	const { t } = useTranslation();
	const { className, contact } = props;

	return (
		<div className={classNames(cls.ContactCard, {}, [className])}>
			{contact.name}
		</div>
	);
});
