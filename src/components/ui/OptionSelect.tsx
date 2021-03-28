import React, { useRef, useState, useEffect } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { OptionData } from "../types";

type OptionSelectProps = {
	options: OptionData[];
	currentOption: OptionData;
	onOptionSelect: (option: OptionData) => void;
	icon: IconDefinition;
};

const OptionSelect: React.FC<OptionSelectProps> = ({
	options,
	currentOption,
	onOptionSelect,
	icon,
}) => {
	const [showExtendedSelect, setShowExtendedSelect] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!selectRef.current) return;
		const handleFocusIn = () => {
			setShowExtendedSelect(true);
		};
		const handleFocusOut = () => {
			setShowExtendedSelect(false);
		};

		const node = selectRef.current;
		node.addEventListener("focusin", handleFocusIn);
		node.addEventListener("focusout", handleFocusOut);

		return () => {
			node.removeEventListener("focusin", handleFocusIn);
			node.removeEventListener("focusout", handleFocusOut);
		};
	}, [selectRef]);

	return (
		<div
			className={clsx({
				"select-wrapper": true,
				extended: showExtendedSelect,
				reduced: !showExtendedSelect,
			})}
			tabIndex={0}
			ref={selectRef}
		>
			<span className="select-icon">
				<FontAwesomeIcon icon={icon} />
			</span>
			<select className="select" value={currentOption.key}>
				{options.map((opt, key) => (
					<option
						// eslint-disable-next-line react/no-array-index-key
						key={key}
						className="option"
						value={opt.key}
						onSelect={() => onOptionSelect(opt)}
					>
						{opt.text}
					</option>
				))}
			</select>
		</div>
	);
};

export default OptionSelect;
