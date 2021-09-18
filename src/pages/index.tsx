import { signIn, signOut, useSession } from "next-auth/client";
import { FC, Fragment } from "react";

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
						onClick={() =>
							signIn("google", { callbackUrl: "http://localhost:3000/" })
						}
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
