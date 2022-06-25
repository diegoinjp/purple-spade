<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/cast.json');
		const { cast } = await res.json();
		console.log(cast);

		if (res.ok) {
			return {
				props: {
					cast
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not fetch the guides')
		};
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	export let cast;
</script>

<svelte:head>
	<title>CAST | パープルスペード舞台</title>
</svelte:head>

<div class="cast">
	{#each cast as actor, i}
		<div class="actor" in:fade={{ x: -200, duration: 450, delay: i * 50 }}>
			<a sveltekit:prefetch href={`/cast/${actor.role}`}>
				<img src={actor.img} alt="" />
				<p>{actor.character}</p>
			</a>
		</div>
	{:else}
		<p>Loading...</p>
	{/each}
</div>

<style lang="scss">
	.cast {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		gap: var(--rem8);

		.actor {
			display: flex;

			a {
				color: var(--white);
				opacity: 0.7;
				transition: 0.2s;
			}

			&:hover a {
				opacity: 1;
				color: var(--primary);
			}

			img {
				height: 12rem;
				object-fit: cover;
			}
		}
	}
</style>
