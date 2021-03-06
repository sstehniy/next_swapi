import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.replace("/explore");
	}, [router]);
	return (
		<div className="flex">
			<button
				type="button"
				className="py-2 px-7 bg-blue-200 text-lg rounded-xl shadow hover:shadow-sm"
			>
				Click
			</button>
		</div>
	);
}
