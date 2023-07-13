import css from "~/assets/main.css?inline";

export function useTheme() {
	// removeAllStyles();
	
	console.log("Adding theme?");
	
	const style = document.createElement('style');
	style.innerHTML = css;

	document.head.appendChild(style);
	document.body.appendChild(style);
}

function removeAllStyles() {
	document.querySelectorAll('[style]')
		.forEach(el => el.removeAttribute('style'));

	document.querySelectorAll('link[rel="stylesheet"]')
		.forEach(el => el.parentNode.removeChild(el));

	document.querySelectorAll('style')
		.forEach(el => el.parentNode.removeChild(el));
}
