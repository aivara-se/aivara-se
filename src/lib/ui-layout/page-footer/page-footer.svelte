<script lang="ts">
	import { page } from '$app/stores';

	let currentPath: string;

	$: currentPath = $page.url.pathname;
</script>

<footer>
	<div class="footer-links">© 2023 Aivara.se</div>
	<nav>
		<a class={currentPath === '/privacy' ? 'active' : ''} href="/privacy">Privacy Policy</a>
	</nav>
</footer>

<style>
	footer {
		height: 60px;
		padding: 8px 0;
		background-color: #213547;
		color: #e3e3e3;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.footer-links {
		margin: 0 0 0 32px;
		font-size: 12px;
		line-height: 1;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	footer a {
		color: #e3e3e3;
		text-decoration: none;
	}

	nav {
		display: flex;
		margin: 0 16px 0 0;
	}

	nav a {
		display: flex;
		box-sizing: border-box;
		align-items: center;
		margin: 8px;
		padding: 10px 12px;
		text-decoration: none;
		color: rgba(255, 255, 255, 0.75);
		font-size: 12px;
		line-height: 1;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 2px;
		transition: all 0.2s;
	}

	nav a:hover,
	nav a.active {
		color: rgba(255, 255, 255, 1);
	}

	/*

	nav a {
		display: flex;
		align-items: center;
		padding: 16px;
		text-decoration: none;
		color: #ffffff;
		opacity: 0.5;
		font-size: 12px;
		line-height: 1;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		transition: all 0.2s;
	}

	nav a:hover {
		background: rgba(0, 0, 0, 0.05);
		opacity: 1;
	} */
</style>
