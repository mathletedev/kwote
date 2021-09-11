import Head from "next/head";
import { FC, Fragment } from "react";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<Head>
				<title>Kwote</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			{children}
		</Fragment>
	);
};

export default Layout;
