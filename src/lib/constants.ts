export const __prod__ = process.env.NODE_ENV === "production";
export const __callbackUrl__ = __prod__
	? "https://kwote.vercel.app/"
	: "http://localhost:3000/";
