<script lang="ts">
	import logoUrl from './navigation-bar-logo.png';
</script>

<div class="wrapper">
	<a class="logo" href="/">
		<img src={logoUrl} alt="Logo" width="32px" />
	</a>
	<nav>
		<a href="/">Home</a>
		<a href="/">About</a>
		<a href="/">Contact</a>
	</nav>
</div>

<style>
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
		padding: 16px;
		text-decoration: none;
		color: #213547;
		opacity: 0.5;
		font-size: 16px;
		line-height: 1;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		transition: all 0.2s;
	}

	nav a:hover {
		background: rgba(0, 0, 0, 0.05);
		opacity: 1;
	}

	a.logo {
		display: flex;
		align-items: center;
		padding: 0;
		margin-left: 32px;
	}
</style>
