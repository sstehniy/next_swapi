import { useRouter } from "next/router";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
	${tw`relative cursor-pointer w-full bg-primary-black text-center py-2 rounded-sm shadow-xl text-primary-light uppercase tracking-wider text-xl`}
`;

const StyledLink = ({ path, activeClassName, className }) => {
	const router = useRouter();
	return (
		<div className="">
			<a>{path.text}</a>
			<div
				className="absolute bg-primary-blue h-full rounded-sm"
				style={{
					zIndex: -1,
					top: "2px",
					width: "99.5%",
					left: "50%",
					transform: "translateX(-50%)",
				}}
			/>
		</div>
	);
};

export default StyledLink;
