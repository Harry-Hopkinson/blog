export const getGlobalData = () => {
	const name = process.env.BLOG_NAME
		? decodeURI(process.env.BLOG_NAME)
		: "Harry Hopkinson";
	const blogTitle = process.env.BLOG_TITLE
		? decodeURI(process.env.BLOG_TITLE)
		: "Harry Hopkinson's Blog";

	return {
		name,
		blogTitle,
	};
};
