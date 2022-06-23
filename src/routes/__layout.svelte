<script>
	import Header from '../lib/Header.svelte';
	import Loader from '../lib/Loader.svelte';
	import '../app.scss';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let isPageLoad = false;

	onMount(() => {
		setTimeout(() => {
			isPageLoad = true;
		}, 2000);
	});
</script>

<Header />

{#if !isPageLoad}
	<Loader />
{/if}
<main>
	<div>
		<slot />
	</div>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: grid;
		place-items: center;
		background: var(--bg);
		color: var(--text-color);

		div {
			width: min(90vw, 700px);
			text-align: center;
		}
	}
</style>
