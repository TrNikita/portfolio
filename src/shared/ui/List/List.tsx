import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './List.module.scss';

interface ListProps {
	className?: string;
	items: string[];
}

export const List = memo((props: ListProps) => {
	const { t } = useTranslation();
	const { className, items } = props;

	return (
		<div className={classNames(cls.List, {}, [className])}>
			{items?.map((item) => (
				<ul key={item} className={cls.itemsList}>
					<li className={cls.item}> - {item}</li>
				</ul>
			))}
		</div>
	);
});
