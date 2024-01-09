import Loginform from "@/components/auth/Loginform";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-800 to-black">
			<div className="bg-neutral-800 p-8 rounded-lg shadow-md w-4/12">
				<div className="flex flex-col items-center justify-center space-y-6">
					<div className="mb-6">
						<Image
							src={"/smartserv.jpg"}
							alt="Your Image Alt Text"
							width={500}
							height={300}
						/>
					</div>
					<Loginform />
					<a
						href="mailto:support@smartserv.io?subject=Password%20Reset&body=Please%20reset%20my%20password.%0D%0A%0D%0AThank%20you."
						
            className="text-gray-500 text-center underline py-2 hover:text-slate-400"
					>
						Forgot your password?
					</a>
				</div>
			</div>
		</div>
	);
};

export default Page;
