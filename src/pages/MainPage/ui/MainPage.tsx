import React from 'react';
import { useTranslation } from 'react-i18next';
import info from '@/shared/info';
import { About } from '@/widgets/About';
import { ContactsBlock } from '@/widgets/ContactsBlock';
import { CoursesBlock } from '@/widgets/CoursesBlock';
import { Navbar } from '@/widgets/Navbar';
import { ProjectsBlock } from '@/widgets/ProjectsBlock';
import { SkillsBlock } from '@/widgets/SkillsBlock';

export const MainPage = () => {
	const { t } = useTranslation();

	console.log('info', info);
	const text = 'Whereas disregard and contempt for human rights have resulted\n';

	return (
		<div>
			<Navbar/>
			{/*<Projects/>*/}
			{/*<Skills/>*/}
			{/*<Contacts/>*/}
			{/*<Courses/>*/}
			{/*<CV/>*/}
			<About id={'about'}>
				{text}
			</About>
			<SkillsBlock {...info.skills}/>
			<ProjectsBlock {...info.projects}/>
			<CoursesBlock {...info.courses}/>
			<ContactsBlock {...info.contacts}/>
		</div>
	);
};
