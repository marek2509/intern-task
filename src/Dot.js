import { useState } from 'react';
import './Dot.css';

const Dot = ({ children, onClick, isActive }) => {
	const [activeBefore, setActiveBefore] = useState(false);

	const handleDotActiveBefore = () => {
		if (activeBefore && isActive) {
			setActiveBefore(false);
		} else {
			setActiveBefore(isActive);
		}
	};

	return (
		<div
			className={
				isActive && isActive !== activeBefore ? 'dot activeDot' : 'dot'
			}
			onClick={() => {
				handleDotActiveBefore();
				onClick();
			}}
		>
			<p>{children}</p>
		</div>
	);
};

export default Dot;
