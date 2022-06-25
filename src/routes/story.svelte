<script>
	let count = 0;
	$: doubled = count * 2;
</script>

<svelte:head>
	<title>STORY | パープルスペード舞台</title>
</svelte:head>

<div>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic quisquam, rem tenetur officia
		similique reprehenderit quos aut, autem cumque possimus optio numquam, quibusdam sit labore
		ipsam. Sit cum molestias aperiam architecto perferendis dicta voluptas in natus aspernatur
		magni. Temporibus ea quis quidem sequi. Fugit quibusdam veritatis natus neque aut.
	</p>
	<div class="counter">
		<h2>Count is {count} and double is {doubled}</h2>
		<button
			on:click={() => {
				count--;
			}}>-</button
		>
		<button
			on:click={() => {
				count = 0;
			}}>Reset</button
		>
		<button
			on:click={() => {
				count++;
			}}>+</button
		>
	</div>
	<a href="/">Home</a>
</div>

<style lang="scss">
	.counter {
		margin: var(--rem16) 0;

		h2 {
			color: white;
		}
	}
</style>
