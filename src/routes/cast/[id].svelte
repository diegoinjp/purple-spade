<script context="module">
	export async function load({ params, fetch }) {
		const role = params.id;
		const res = await fetch(`/cast/${role}.json`);
		const { actor } = await res.json();

		if (res.ok) {
			return {
				props: {
					actor
				}
			};
		}

		return {
			status: 301,
			// error: new Error('Could not fetch that guide')
			redirect: '/cast'
		};
	}
</script>

<script>
	import { fly, fade } from 'svelte/transition';
	export let actor;
</script>

<img src={actor.img} alt="" in:fade />
<div class="actor" in:fly={{ y: 50, duration: 1000 }}>
	<h2>{actor.character}</h2>
	<p>{actor.name}</p>
	<p>{actor.reading}</p>
	<p>{actor.comment}</p>

	<a href="/cast">Back</a>
</div>

<style lang="scss">
	img {
		width: 50%;
	}
</style>
