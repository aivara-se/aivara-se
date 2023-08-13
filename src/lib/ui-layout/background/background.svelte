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
