<script>
	import '../app.scss';
	let active = false;
</script>

<header>
	<nav class="nav">
		<div class="nav__logo">
			<a href="/">PURPLE SPADE</a>
		</div>
		<div class="nav__menu">
			<a href="/about">About</a>
			<a href="/info">Stage</a>
			<a href="/cast">Cast</a>
			<a href="/news">News</a>
			<a href="/guide">Guide</a>
		</div>
		<!-- <div class:active class="nav__btn" on:click={() => (active = !active)} /> -->
	</nav>
</header>

<style lang="scss">
	header {
		width: 100vw;
		display: fixed;
		background: var(--bg);
		z-index: 10;
		top: 0;
		left: 0;
		z-index: 10;

		.nav {
			width: min(100%, 800px);
			margin: 0 auto;
			padding: var(--rem16);
			display: flex;
			justify-content: space-between;

			&__menu {
				& > a:not(:last-child) {
					margin-right: var(--rem12);
				}
			}

			&__btn {
				width: var(--rem32);
				height: var(--rem32);
				// background: var(--white);
				position: relative;
				cursor: pointer;

				&::before,
				&::after {
					content: '';
					position: absolute;
					background: var(--white);
					width: var(--rem32);
					height: var(--rem6);
					transition: 0.3s;
				}

				&::before {
					top: var(--rem6);
				}
				&::after {
					bottom: var(--rem6);
				}
			}
		}
		.active.nav__btn {
			&::before {
				transform: rotate(225deg) translateY(-0.73rem);
			}
			&::after {
				transform: rotate(-225deg) translateY(0.73rem);
			}
		}
	}
</style>
