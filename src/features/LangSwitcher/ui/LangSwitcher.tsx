import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
	Button,
	ButtonSize,
	ButtonTheme,
} from '../../../shared/ui/Button/Button';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggle = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	return (
		<Button
			className={className}
			theme={ButtonTheme.BACKGROUND}
			onClick={toggle}
			size={ButtonSize.M}
		>
			{t('Язык')}
		</Button>
	);
});
