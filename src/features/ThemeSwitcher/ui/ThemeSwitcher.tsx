import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Switcher } from '@/shared/ui/Switcher';


interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();

	const themeLight = theme === Theme.LIGHT;

	return (
		<div className={className}>
			<Switcher
				handleToggle={toggleTheme}
				isOn={themeLight}
				title={themeLight ? t('Свет') : t('Тень')}
			/>
		</div>
	);
});
