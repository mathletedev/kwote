import { useSession } from "next-auth/client";
import { FC } from "react";

const Dash: FC = () => {
	const [session] = useSession();

	return (
		<div className="flex w-screen">
			<div className="m-auto text-grey text-lg">
				hello, {session!.user?.name}!
			</div>
		</div>
	);
};

export default Dash;
