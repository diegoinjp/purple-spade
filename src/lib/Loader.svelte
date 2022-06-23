<script>
	import { fade } from 'svelte/transition';
</script>

<div class="loader" transition:fade>
	<img src="/Double Ring-1s-200px.svg" alt="" />
</div>

<style lang="scss">
	.loader {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: grid;
		place-items: center;
		background-color: var(--bg);
		z-index: 100;
		color: var(--text-color);
	}
</style>
