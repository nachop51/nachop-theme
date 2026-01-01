import type { ColorScheme } from "vs-theme-builder";

const colors: ColorScheme = {
	editor: {
		bg: "#1d1a24",
		fg: "#edecee",
		cursor: "#a277ff",
		lineNumber: "#9d92be",
	},
	ui: {
		bg: "#1d1a24",
		fg: "#80748c",
		border: "#161620",
	},

	primary: "#a277ff",
	primaryContent: "#fff",
	accent: "#aeaaff",

	syntax: {
		keyword: "#a277ff", // #e06c75, #fa8f65
		variables: "#ee6488", // #ff9ac1, #fb94ff
		string: "#cae790",
		func: {
			name: "#6da8f2",
			param: "#e0bdf2",
		},
		const: "#f5dd87",
		macros: "#f29e74",
		punctuation: "#9899c5", // #c792ea
		comment: "#676e78",
		class: "#ffcb6b", // #59c2ff
		numeric: "#f29e74", // #d19a66
		regexp: "#95e6cb",
	},
};

export default colors;
