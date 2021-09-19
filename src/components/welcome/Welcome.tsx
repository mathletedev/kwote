import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { __callbackUrl__ } from "../../lib/constants";
import Loading from "../common/Loading";

const Welcome: FC = () => {
	const [session] = useSession();
	const router = useRouter();

	if (session) {
		router.push("/dash");

		return <Loading />;
	}

	return (
		<div className="flex h-screen w-screen">
			<button
				onClick={() => signIn("google", { callbackUrl: __callbackUrl__ })}
				className="text-button m-auto"
			>
				sign in with google
			</button>
		</div>
	);
};

export default Welcome;
