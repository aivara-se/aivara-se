<script lang="ts">
	import ContactDetails from '$lib/ui-content/ContactDetails.svelte';
	import cloudUrl from './assets/cloud.svg';
	import debugUrl from './assets/debug.svg';
	import serverUrl from './assets/server.svg';
</script>

<article>
	<p>
		From crafting sleek web apps or anything else you have on your mind, we've got your back. Let's
		team up and create some magic!
	</p>
	<div class="services">
		<div class="item">
			<img src={serverUrl} width="32px" height="32px" alt="Web Development" /><br />
			Web Development
		</div>
		<div class="item">
			<img src={cloudUrl} width="32px" height="32px" alt="Cloud Architecture" /><br />
			Cloud Architecture
		</div>
		<div class="item">
			<img src={debugUrl} width="32px" height="32px" alt="Debugging Issues" /><br />
			Debugging Issues
		</div>
	</div>
	<p>
		We're all about making tech work for you. With a blend of expertise and a knack for
		problem-solving, we're your go-to tech consulting crew. From untangling complex codes to
		streamlining your operations, we're here to help you navigate the digital landscape with ease.
		Let's tackle tech challenges, one solution at a time!
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
	.services .item {
		padding: 16px;
		text-align: center;
		box-sizing: border-box;
		border: dotted 1px rgba(33, 53, 71, 0.25);
	}

	@media (max-width: 700px) {
		.services .item {
			margin: 16px 0;
		}
	}

	@media (min-width: 700px) {
		.services {
			text-align: center;
		}

		.services .item {
			display: inline-block;
			width: 250px;
			margin: 16px;
		}
	}
</style>
