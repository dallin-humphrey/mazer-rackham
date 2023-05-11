import React from "react";
import Header from "~/components/Header";
import mapOverMe from "~/components/dummyData/mapOverMe";

interface BlogProps {
	title: string;
	content: string;
}

const Blog: React.FC<BlogProps> = () => {
	return (
		<div>
			<Header />
			<div className="bg-slate-500">
				{mapOverMe.map((item, index) => (
					<div key={index} className="text-black">
						<h2>{item.title}</h2>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blog;
