import React from "react";
import Header from "~/components/Header";

interface BlogProps {
	title: string;
	content: string;
}

const Blog: React.FC<BlogProps> = ({ title, content }) => {
	return (
		<div>
			<Header />
			<div className="bg-slate-500">
				<h2>{title}</h2>
				<p>{content}</p>

			</div>
		</div>
	);
};

export default Blog;
