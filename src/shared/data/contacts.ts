import Github from '@/shared/assets/icons/github.svg';
import Habr from '@/shared/assets/icons/habr.svg';
import Hh from '@/shared/assets/icons/hh.svg';
import Linkedin from '@/shared/assets/icons/linkedin.svg';
import Mail from '@/shared/assets/icons/mail.svg';
import Telegram from '@/shared/assets/icons/telegram.svg';

export const contacts = {
	id: 'contacts',
	title: 'Контакты',
	data: [
		{
			name: 'Telegram / TrN91',
			link: 'https://t.me/TrN91',
			icon: Telegram,
		},
		{
			name: 'Mail / tr_nikita@mail.ru',
			link: 'mailto:tr_nikita@mail.ru',
			icon: Mail,
		},
		{
			name: 'GitHub / TrNikita',
			link: 'https://github.com/TrNikita',
			icon: Github,
		},
		{
			name: 'hh.ru / Трохов Никита',
			link: 'https://krasnoyarsk.hh.ru/resume/8e4eea6fff0c127f9d0039ed1f30416559386a',
			icon: Hh,
		},
		{
			name: 'Habr Career / TrNikita',
			link: 'https://career.habr.com/trnikita',
			icon: Habr,
		},
		{
			name: 'Linkedin / TrNikita',
			link: 'https://www.linkedin.com/in/trnikita/',
			icon: Linkedin,
		},
	],
};
