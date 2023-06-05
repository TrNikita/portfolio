import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { List } from '@/shared/ui/List';
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
			<div className={cls.title}>{course.title}</div>
			<a className={cls.link} href={course.link} target="_blank" rel="noreferrer">
				<div className={cls.school}>{course.school}</div>
			</a>
			<div className={cls.duration}>{course.duration}</div>

			{<List items={course.skills} />}
		</div>
	);
});
