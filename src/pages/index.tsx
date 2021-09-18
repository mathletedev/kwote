import { signIn, signOut, useSession } from "next-auth/client";
import { FC, Fragment } from "react";
import { __callbackUrl__ } from "../lib/constants";

const Index: FC = () => {
	const [session, loading] = useSession();

	if (loading) return <div>Loading</div>;

	return (
		<Fragment>
			{!session ? (
				<div>
					Not signed in
					<br />
					<button
						onClick={() => signIn("google", { callbackUrl: __callbackUrl__ })}
					>
						Sign in with Google
					</button>
				</div>
			) : (
				<div>
					Signed in as {session.user?.name}
					<br />
					<button onClick={() => signOut()}>Sign out</button>
				</div>
			)}
		</Fragment>
	);
};

export default Index;
