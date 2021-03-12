import { useRouter } from "next/router";

const EventDetails = () => {
	const router = useRouter();

	return <div>Event number {router.query.id}</div>;
};

export default EventDetails;
