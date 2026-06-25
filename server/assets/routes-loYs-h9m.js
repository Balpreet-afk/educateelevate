import { jsx } from "react/jsx-runtime";
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsx("iframe", {
		src: "/site/index.html",
		title: "Educate & Elevate",
		style: {
			position: "fixed",
			inset: 0,
			width: "100%",
			height: "100%",
			border: 0
		}
	});
}
//#endregion
export { Index as component };
