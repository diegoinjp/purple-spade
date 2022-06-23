import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: preprocess({
		scss: {
		  prependData: `@import './src/app.scss';`
		} 
	 })
};

export default config;
