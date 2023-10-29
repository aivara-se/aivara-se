<script lang="ts">
	import ContactDetails from '$lib/ui-content/ContactDetails.svelte';
	import aivaraIconUrl from './assets/aivara.png';
	import provarIconUrl from './assets/provar.png';
</script>

<article>
	<p>
		Welcome to AIVARA - Your Hub for Software Development. We're dedicated to helping developers and
		companies thrive in creating digital experiences.
	</p>
	<strong>Our products</strong>
	<p>
		Our journey began with user feedback, and we're expanding our toolkit to empower your
		development process.
	</p>
	<div class="products">
		<a href="https://provar.se" class="item">
			<div class="product-item-content">
				<img src={provarIconUrl} width="32px" height="32px" alt="Provar.se" />
				<div class="text">
					<strong>PROVAR.SE</strong><br />
					Collect User Feedback
				</div>
			</div>
		</a>
		<a href="#products" class="item">
			<div class="product-item-content">
				<img
					src={aivaraIconUrl}
					width="32px"
					height="32px"
					alt="Provar.se"
					style="visibility:hidden"
				/>
				<div class="text">
					<strong>MORE TO COME</strong><br />
					TODO: build more apps
				</div>
			</div>
		</a>
	</div>
	<p>
		Unlock your software's potential with our user feedback tool. Understand users, gather insights,
		and fine-tune your software with confidence. More tools are on the way to enhance your
		development journey, including feature flag management and collaboration.
	</p>
	<strong>Talk to us</strong>
	<p>
		We're here to assist you every step of the way. Whether you have questions about our services,
		want to explore custom solutions, or simply wish to discuss how we can help your business
		thrive, we'd love to hear from you. Feel free to reach out to us:
	</p>
	<ContactDetails />
</article>

<style>
	.products .item {
		padding: 16px;
		text-align: center;
		box-sizing: border-box;
		text-decoration: none;
		color: rgba(0, 0, 0, 0.6);
		font-size: 12px;
		line-height: 1.5;
		font-weight: 600;
		transition: all 0.2s;
		border: dashed 1px rgba(33, 53, 71, 0.5);
	}

	.products .item:hover {
		color: rgba(0, 0, 0, 0.8);
		border: solid 1px rgba(33, 53, 71, 1);
	}

	.products .item .product-item-content {
		display: flex;
	}

	.products .item .product-item-content .text {
		flex: 1;
		text-align: left;
		margin-left: 12px;
	}

	@media (max-width: 700px) {
		.products .item {
			margin: 16px 0;
		}
	}

	@media (min-width: 700px) {
		.products {
			text-align: center;
		}

		.products .item {
			display: inline-block;
			width: 250px;
			margin: 16px;
		}
	}
</style>
