import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import cls from './ContactCard.module.scss';
import { Contact } from '../model/types/types';

interface ContactCardProps {
	className?: string;
	contact: Contact;
}

export const ContactCard = memo((props: ContactCardProps) => {
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
				<div className={cls.linkContent}>
					{contact.icon ? (
						<Icon Svg={contact?.icon} className={cls.icon} />
					) : null}
					<Text size={TextSize.L} text={contact.name} />
				</div>
			</a>
		</div>
	);
});
