import React, { memo } from 'react';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Switcher } from '@/shared/ui/Switcher';


interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={className}>
			<Switcher handleToggle={toggleTheme} isOn={theme === Theme.LIGHT}/>
		</div>
	);
});
