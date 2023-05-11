import React from "react";
import Link from "next/link";

const LoginRequired: React.FC = () => {
	return (
		<div>
			<h1>Login Required</h1>
			<p>Please login to access this page.</p>
			<Link href="/login">Login</Link>
		</div>
	);
};

export default LoginRequired;
