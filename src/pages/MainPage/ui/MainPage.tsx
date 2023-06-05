import React from 'react';
import data from '@/shared/data';
import { About } from '@/widgets/About';
import { ContactsBlock } from '@/widgets/ContactsBlock';
import { CoursesBlock } from '@/widgets/CoursesBlock';
import { Navbar } from '@/widgets/Navbar';
import { ProjectsBlock } from '@/widgets/ProjectsBlock';
import { SkillsBlock } from '@/widgets/SkillsBlock';

export const MainPage = () => {
	return (
		<>
			<Navbar />
			<About {...data.about} />
			<SkillsBlock {...data.skills} />
			<ProjectsBlock {...data.projects} />
			<CoursesBlock {...data.courses} />
			<ContactsBlock {...data.contacts} />
		</>
	);
};
