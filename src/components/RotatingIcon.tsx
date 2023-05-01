import React from "react";

interface IconProps {
	color: string;
}

const PlusIcon: React.FC<IconProps> = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke={color}
			className="w-6 h-6"
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	);
};

const MinusIcon: React.FC<IconProps> = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke={color}
			className="w-6 h-6"
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
		</svg>
	);
};


interface RotatingIconProps {
	iconColor: string;
	open: boolean;
}

const RotatingIcon: React.FC<RotatingIconProps> = ({ iconColor, open }) => {
	const plusButtonClasses = `absolute focus:ring-0 focus:border-none transform transition-all duration-1000 ${open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
		}`;

	const minusButtonClasses = `absolute focus:ring-0 focus:border-none transform transition-all duration-1000 ${open ? "opacity-100 rotate-180" : "opacity-0 rotate-90"
		}`;

	return (
		<div className="flex items-center justify-center">
			<div className="relative">
				<button className={plusButtonClasses}>
					<PlusIcon color={iconColor} />
				</button>
				<button className={minusButtonClasses}>
					<MinusIcon color={iconColor} />
				</button>
			</div>
		</div>
	);
};

export default RotatingIcon;
