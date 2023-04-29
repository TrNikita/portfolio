import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Switcher.module.scss';


interface SwitcherProps {
	className?: string;
	isOn?: boolean;
	handleToggle: () => void;
	title?: string;
}

export const Switcher = (props: SwitcherProps) => {
	const { isOn = false, handleToggle, title } = props;
	const mods: Mods = {
		[cls.isOn]: isOn,
	};

	return (
		<div className={cls.container}>
			<input
				checked={isOn}
				onChange={handleToggle}
				className={cls.switchCheckbox}
				id='switch'
				type='checkbox'
			/>
			<label
				className={classNames(cls.switchLabel, mods)}
				htmlFor='switch'
			>
				<span className={cls.switchButton}/>
			</label>
			{title}
		</div>
	);
};
