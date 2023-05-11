import React from "react";
import { SignedOut, SignedIn, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header: React.FC = () => {
	const { openSignIn, signOut } = useClerk();
	const { user } = useUser();

	const handleSignOut = () => {
		signOut().catch((error) => {
			console.error("Failed to sign out:", error);
		});
	};

	return (
		<header className="w-full py-4 px-8 bg-gradient-to-b bg-slate-50 shadow-md fixed top-0 left-0 z-50">
			<div className="container mx-auto flex items-center justify-between">
				<div className="text-xl font-semibold flex items-center">
					<div className="w-10 h-10 rounded-full overflow-hidden">
						{user?.firstName && (
							// I don't want to set up the height and width of the Image right now.
							// eslint-disable-next-line @next/next/no-img-element
							<img
								src={user.profileImageUrl}
								alt="User Profile"
								className="w-full h-full object-cover"
							/>
						)}
					</div>
					{user && (
						<Link href="/blog">
							<div className="text-slate-500 hover:underline ml-10 cursor-pointer">Blog</div>
						</Link>
					)}
				</div>
				<div>
					<SignedOut>
						<button
							className="bg-blue-500  hover:shadow-md hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-white py-2 px-4"
							onClick={() => openSignIn()}
						>
							Sign In
						</button>
					</SignedOut>
					<SignedIn>
						<button
							className="bg-red-500 hover:shadow-md hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-white py-2 px-4"
							onClick={handleSignOut}
						>
							Sign Out
						</button>
					</SignedIn>
				</div>
			</div>
		</header>
	);
};

export default Header;
