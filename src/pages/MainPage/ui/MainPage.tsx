import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Navbar } from '@/widgets/Navbar';


export const MainPage = () => {
	const { t } = useTranslation('main');

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
			{/*<About/>*/}
			{/*<Projects/>*/}
			{/*<Skills/>*/}
			{/*<Contacts/>*/}
			{/*<Courses/>*/}
			{/*<CV/>*/}

			<Link
				activeClass='active'
				to='test1'
				hashSpy={true}
				smooth={true}
				duration={500}
			>
				Test 1
			</Link>
			<Link
				activeClass='active'
				className='test2'
				to='test2'
				spy={true}
				smooth={true}
				duration={500}
			>
				Test 2
			</Link>
			<Link
				activeClass='active'
				className='test3'
				to='test3'
				spy={true}
				smooth={true}
				duration={500}
			>
				Test 3
			</Link>

			<div style={style} id='test1'>{text}</div>
			<div style={style} id='test2'>{text}</div>
			<div style={style} id='test3'>{text}</div>
		</div>
	);
};
