import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Icon } from '@/shared/ui/Icon/Icon';
import cls from './ContactCard.module.scss';
import { Contact } from '../model/types/types';

interface ContactCardProps {
	className?: string;
	contact: Contact;
}

export const ContactCard = memo((props: ContactCardProps) => {
	const { t } = useTranslation();
	const { className, contact } = props;

	return (
		<div className={classNames(cls.ContactCard, {}, [className])}>
			<a
				href={contact.link}
				target="_blank"
				key={contact.name}
				rel="noreferrer"
				className={cls.link}
			>
				{contact.icon ? (
					<Icon Svg={contact?.icon} className={cls.icon} />
				) : null}
				{contact.name}
			</a>
		</div>
	);
});
