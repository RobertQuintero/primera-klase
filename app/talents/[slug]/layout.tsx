import React from "react";

export default async function SlugLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
	<React.Fragment>
				{children}
    </React.Fragment>
	);
}