import React from 'react';
import info from '@/shared/info';
import { About } from '@/widgets/About';
import { ContactsBlock } from '@/widgets/ContactsBlock';
import { CoursesBlock } from '@/widgets/CoursesBlock';
import { Navbar } from '@/widgets/Navbar';
import { ProjectsBlock } from '@/widgets/ProjectsBlock';
import { SkillsBlock } from '@/widgets/SkillsBlock';

export const MainPage = () => {
	return (
		<>
			<Navbar/>
			<About/>
			<SkillsBlock {...info.skills}/>
			<ProjectsBlock {...info.projects}/>
			<CoursesBlock {...info.courses}/>
			<ContactsBlock {...info.contacts}/>
		</>
	);
};
