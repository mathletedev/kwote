import {
	ChatIcon,
	HomeIcon,
	LogoutIcon,
	PlusIcon,
	SearchIcon
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";
import Loading from "./Loading";

const Layout: FC = ({ children }) => {
	const [session, loading] = useSession();
	const router = useRouter();

	if (loading) return <Loading />;

	if (!session && router.pathname !== "/") {
		router.push("/");

		return <Loading />;
	}

	return (
		<Fragment>
			<Head>
				<title>kwote</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			{session && (
				<nav className="flex items-center gap-2 bg-indigo-200 h-12 px-4">
					<a href="/dash">
						<HomeIcon className="icon-button" />
					</a>
					<a href="/kwotes">
						<ChatIcon className="icon-button" />
					</a>
					<button>
						<SearchIcon className="icon-button" />
					</button>
					<div className="flex-grow"></div>
					<button>
						<PlusIcon className="icon-button" />
					</button>
					<button onClick={() => signOut()}>
						<LogoutIcon className="icon-button" />
					</button>
				</nav>
			)}
			{children}
		</Fragment>
	);
};

export default Layout;
