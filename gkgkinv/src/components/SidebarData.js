import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Om arrangementet",
	path: "/about-us",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Påmelding",
		path: "/about-us/aim",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Regler",
		path: "/about-us/vision",
		icon: <IoIcons.IoIosPaper />,
	},
    {
		title: "Øvrig informasjon",
		path: "/about-us/ectinfo",
		icon: <IoIcons.IoIosPaper />,
	},
	],
}
];
