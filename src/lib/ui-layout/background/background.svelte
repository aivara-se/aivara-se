<script lang="ts">
	import { onMount } from 'svelte';
	import { BackgroundCanvas } from './background';

	// background canvas element
	let canvas: HTMLCanvasElement;

	onMount(() => {
		BackgroundCanvas.start(canvas);
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		border-bottom: solid 1px rgba(0, 0, 0, 0.1);
	}
</style>
