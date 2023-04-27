import React from 'react';
import { useTranslation } from 'react-i18next';
import info from '@/shared/info';
import { About } from '@/widgets/About';
import { Navbar } from '@/widgets/Navbar';
import { ProjectsBlock } from '@/widgets/ProjectsBlock';
import { SkillsBlock } from '@/widgets/SkillsBlock';

export const MainPage = () => {
	const { t } = useTranslation();

	console.log('info', info);
	const text = 'Whereas disregard and contempt for human rights have resulted\n';

	const style = {
		height: '100vh',
		width: '100vw',
		backgroundColor: '#ededed',
		fontSize: '30px',
		borderTop: '1px solid #000',
		paddingTop: '55px',
		paddingLeft: '10px'
	};
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
		</div>
	);
};
