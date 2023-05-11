import { SignedIn, useUser } from "@clerk/nextjs";
import React from "react";
import Header from "~/components/Header";

const ProtectedContent = () => {
	const { user } = useUser();
	return (
		<>
			<p className="text-4xl mb-8">{user?.fullName}</p>
		</>
	);
};

interface BlogProps {
	title?: string;
	content?: string;
}

const Blog: React.FC<BlogProps> = () => {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col items-center justify-center bg-slate-500 pt-20">
				<div className="w-1/2">
					<SignedIn>
						<ProtectedContent />
					</SignedIn>
				</div>
			</main>
		</>
	);
};

export default Blog;
