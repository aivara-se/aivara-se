<section class="mediums">
	<a class="item" href="mailto:hello@aivara.se" target="_blank">hello@aivara.se</a>
	<a class="item" href="tel:+46xxxxxxxxx" target="_blank">+46xxxxxxxxx</a>
</section>

<style>
	.mediums .item {
		padding: 16px;
		text-align: center;
		box-sizing: border-box;
		text-decoration: none;
		color: rgba(0, 0, 0, 0.6);
		font-size: 12px;
		line-height: 1;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		transition: all 0.2s;
		border: dashed 1px rgba(33, 53, 71, 0.5);
	}

	.mediums .item:hover {
		color: rgba(0, 0, 0, 0.8);
		border: solid 1px rgba(33, 53, 71, 1);
	}

	@media (max-width: 700px) {
		.mediums .item {
			display: block;
			margin: 16px 0;
		}
	}

	@media (min-width: 700px) {
		.mediums {
			text-align: center;
		}

		.mediums .item {
			display: inline-block;
			width: 250px;
			margin: 16px;
		}
	}
</style>
