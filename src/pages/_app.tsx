import { AppProps } from "next/app";
import { FC } from "react";
import Layout from "../components/common/Layout";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;