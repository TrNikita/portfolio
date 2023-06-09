import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localStorage';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	if (theme) {
		document.body.className = theme;
	}

	const toggleTheme = () => {
		let newTheme: Theme;
		switch (theme) {
		case Theme.DARK:
			newTheme = Theme.LIGHT;
			break;
		case Theme.LIGHT:
			newTheme = Theme.DARK;
			break;
		default:
			newTheme = Theme.LIGHT;
		}

		setTheme?.(newTheme);
		document.body.className = newTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};
	return {
		theme: theme || Theme.LIGHT,
		toggleTheme,
	};
}
