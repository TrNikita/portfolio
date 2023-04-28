import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Contact, ContactCard } from '@/entities/Contact';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ContactsBlock.module.scss';

interface ContactsBlockProps {
	id: string;
	data: Contact[];
	title?: string;
	className?: string;
}

export const ContactsBlock = memo((props: ContactsBlockProps) => {
	const { t } = useTranslation();
	const { className, title, id, data } = props;

	return (
		<div
			id={id}
			className={classNames(cls.ContactsBlock, {}, [className])}
		>
			{title ? t(title) : null}
			{data.map(contact => (
				<ContactCard contact={contact} key={contact.name}/>
			))}

		</div>
	);
});
