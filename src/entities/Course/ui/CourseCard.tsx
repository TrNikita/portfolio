import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CourseCard.module.scss';
import { Course } from '../model/types/types';

interface CourseCardProps {
	className?: string;
	course: Course;
}

export const CourseCard = memo((props: CourseCardProps) => {
	const { t } = useTranslation();
	const { className, course } = props;

	return (
		<div className={classNames(cls.CourseCard, {}, [className])}>
			{course.title}
		</div>
	);
});
