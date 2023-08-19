<script>
	import './styles.css';
	import Background from '$lib/ui-layout/background/background.svelte';
	import PageHeader from '$lib/ui-layout/page-header/page-header.svelte';
	import PageContent from '$lib/ui-layout/page-content/page-content.svelte';
	import PageFooter from '../lib/ui-layout/page-footer/page-footer.svelte';
</script>

<div class="wrapper">
	<Background />
	<PageHeader />
	<PageContent><slot /></PageContent>
	<PageFooter />
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex: 1;
		flex-direction: column;
	}
</style>
