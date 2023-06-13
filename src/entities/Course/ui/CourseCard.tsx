import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
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
			<Card theme={CardTheme.OUTLINED}>
				<Card className={cls.title}>
					<a
						className={cls.link}
						href={course.link}
						target="_blank"
						rel="noreferrer"
					>
						<div className={cls.title}>{course.title}</div>
					</a>
					<div className={cls.school}>{course.school}</div>
				</Card>

				<div className={cls.duration}>
					<Card theme={CardTheme.SECOND}
					>
						{course.duration}
					</Card>
				</div>

				{<List items={course.skills} className={cls.listItem} />}
			</Card>
		</div>
	);
});
