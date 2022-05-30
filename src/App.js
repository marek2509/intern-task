import { useState } from 'react';
import './App.css';
import Dot from './Dot';

function App() {
	const [dotNumber, setDotNumber] = useState(false);
	const [dotActive, setDotActive] = useState(false);

	const handleDotActiveChange = (dotId) => {
		if (dotNumber === dotId) {
			setDotActive(false);
		}

		setDotNumber(dotId);
	};

	return (
		<div className="dots-wrapper">
			{new Array(20).fill('#000000').map((_, i) => (
				<Dot
					key={i}
					onClick={() => handleDotActiveChange(i)}
					isActive={dotNumber === i}
				>
					{i + 1}
				</Dot>
			))}
		</div>
	);
}

export default App;
