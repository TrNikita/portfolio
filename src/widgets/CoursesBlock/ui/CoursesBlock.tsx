import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Course, CourseCard } from '@/entities/Course';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CoursesBlock.module.scss';

interface CoursesBlockProps {
	id: string;
	data: Course[];
	title?: string;
	className?: string;
}

export const CoursesBlock = memo((props: CoursesBlockProps) => {
	const { t } = useTranslation();
	const { className, id, title, data } = props;

	return (
		<div
			id={id}
			className={classNames(cls.CoursesBlock, {}, [className])}
		>
			{title ? t(title) : null}
			{data.map(course => (
				<CourseCard course={course} key={course.id}/>
			))}
		</div>


	);
});
