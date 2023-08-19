<article>
	<slot />
</article>

<style>
	article {
		display: block;
		flex: 1;
		margin: 32px auto;
		width: 100%;
		box-sizing: border-box;
	}

	@media (max-width: 700px) {
		article {
			padding: 0 32px;
		}
	}

	@media (min-width: 700px) {
		article {
			max-width: 600px;
		}
	}
</style>
