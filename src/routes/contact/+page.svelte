<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<article>
	<h2>Talk to us</h2>
	<p>
		We're here to assist you every step of the way. Whether you have questions about our services,
		want to explore custom solutions, or simply wish to discuss how we can help your business
		thrive, we'd love to hear from you. Feel free to reach out to us:
	</p>

	{#if form?.success}
		<p class="success">Message sent successfully!</p>
	{:else}
		<form method="post" use:enhance>
			<textarea name="message" rows="10" placeholder="Your message" required />
			<div class="buttons">
				<button type="submit">Send a message!</button>
			</div>
		</form>
	{/if}
</article>

<style>
	p.success {
		color: green;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		max-width: 100%;
	}

	textarea {
		resize: vertical;
		padding: 16px;
		box-sizing: border-box;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.6);
		transition: all 0.2s;
		border: dashed 1px rgba(33, 53, 71, 0.5);
	}

	textarea:focus {
		outline: none !important;
		border: solid 1px rgba(33, 53, 71, 1);
	}

	.buttons {
		margin: 16px 0;
		text-align: right;
	}

	button {
		padding: 8px 16px;
		text-align: center;
		box-sizing: border-box;
		text-decoration: none;
		color: rgba(0, 0, 0, 0.6);
		font-size: 12px;
		line-height: 1;
		font-weight: 600;
		transition: all 0.2s;
		background: white;
		border: dashed 1px rgba(33, 53, 71, 0.5);
	}

	button:hover,
	button:focus {
		outline: none !important;
		color: rgba(0, 0, 0, 0.8);
		border: solid 1px rgba(33, 53, 71, 1);
	}
</style>
