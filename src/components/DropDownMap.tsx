import React, { useState } from "react";
import RotatingIcon from "./RotatingIcon";
import mapOverMe from "./dummyData/mapOverMe";

const DropDownItem: React.FC<{ title: string; description: string; isOpen: boolean; toggleOpen: () => void }> = ({
	title,
	description,
	isOpen,
	toggleOpen,
}) => {
	const calculatePadding = (description: string) => {
		const charsPerLine = 70;
		const lineHeight = 1.5;
		const marginBottom = 0.5;
		const minPadding = 4;
		const lines = Math.ceil(description.length / charsPerLine);
		const padding = Math.max(lines * lineHeight + marginBottom, minPadding);
		return padding;
	};

	const paddingBottom = isOpen ? `${calculatePadding(description)}rem` : "0";

	return (
		<div className={`mb-2 relative transition-padding duration-1000 w-full cursor-pointer`} style={{ paddingBottom }}>
			<div
				onClick={toggleOpen}
				className="py-2 px-4 border-2 border-gray-300 rounded-md text-left flex justify-between"
			>
				<div>{title}</div>
				<div className="pr-5">
					<RotatingIcon iconColor="white" open={isOpen} />
				</div>
			</div>
			<div
				className={`absolute left-0 overflow-hidden transition-height duration-1000 ${isOpen ? "h-auto" : "h-0"
					}`}
			>
				<div
					className={`mt-2 px-4 py-2 border border-t-0 border-gray-300 rounded-b-md bg-white text-gray-700 transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"
						}`}
				>
					{description}
				</div>
			</div>
		</div>
	);
};

const DropDownMap: React.FC = () => {
	const [openItem, setOpenItem] = useState<string | null>(null);

	const toggleOpen = (title: string) => {
		if (openItem === title) {
			setOpenItem(null);
		} else {
			setOpenItem(title);
		}
	};

	return (
		<div className="">
			{mapOverMe.map((item) => (
				<DropDownItem
					key={item.title}
					title={item.title}
					description={item.description}
					isOpen={openItem === item.title}
					toggleOpen={() => toggleOpen(item.title)}
				/>
			))}
		</div>
	);
};

export default DropDownMap;
