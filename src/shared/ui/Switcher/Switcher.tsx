import cls from './Switcher.module.scss';


interface SwitcherProps {
	className?: string;
	isOn?: boolean;
	handleToggle: () => void;
}

export const Switcher = (props: SwitcherProps) => {
	const { isOn = true, handleToggle, className } = props;
	console.log('className', className);
	return (
		<div className={className}>
			<input
				checked={isOn}
				onChange={handleToggle}
				className={cls.switchCheckbox}
				id='switch'
				type='checkbox'
			/>
			<label
				style={{ background: isOn ? '#EF476F' : '#06D6A0' }}
				className={cls.switchLabel}
				htmlFor='switch'
			>
				<span className={cls.switchButton}/>
			</label>
		</div>
	);
};
