<script lang="ts">
	import { page } from '$app/stores';
	import logoUrl from './page-header-logo.png';

	let currentPath: string;

	$: currentPath = $page.url.pathname;
</script>

<header>
	<h1>AIVARA</h1>
	<small>Your Hub for Software Development!</small>
</header>

<div class="wrapper">
	<a class="logo" href="/">
		<img src={logoUrl} alt="Logo" width="32px" height="32px" />
	</a>
	<nav>
		<a class={currentPath === '/' ? 'active' : ''} href="/">Home</a>
		<a class={currentPath === '/contact' ? 'active' : ''} href="/contact">Contact</a>
	</nav>
</div>

<style>
	header {
		position: absolute;
		top: 160px;
		left: 0;
		right: 0;
		display: block;
		box-sizing: border-box;
	}

	h1 {
		margin: 0;
		display: block;
		line-height: 1;
		font-size: 48px;
		text-align: center;
	}

	small {
		display: block;
		text-align: center;
		font-size: 24px;
		font-weight: 600;
	}

	.wrapper {
		position: absolute;
		top: 0;
		left: 0;
		height: 48px;
		width: 100%;
		display: flex;
		padding: 32px 0;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
		box-sizing: border-box;
	}

	nav {
		display: flex;
		margin: 0 16px 0 0;
	}

	nav a {
		display: flex;
		align-items: center;
		margin: 8px;
		padding: 10px 12px;
		text-decoration: none;
		color: rgba(33, 53, 71, 0.75);
		font-size: 12px;
		line-height: 1;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 2px;
		transition: all 0.2s;
		border: dashed 1px rgba(33, 53, 71, 0.5);
	}

	nav a:hover,
	nav a.active {
		color: rgba(33, 53, 71, 1);
		border: solid 1px rgba(33, 53, 71, 1);
		background: rgba(255, 255, 255, 1);
	}

	a.logo {
		display: flex;
		align-items: center;
		padding: 0;
		margin-left: 32px;
	}
</style>
