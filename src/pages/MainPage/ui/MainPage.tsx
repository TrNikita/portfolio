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
			<ProjectsBlock {...info.projects}/>
			<SkillsBlock {...info.skills}/>
			<CoursesBlock {...info.courses}/>
			<ContactsBlock {...info.contacts}/>
		</>
	);
};
