-

// blocks are 10px by 10px
const BLOCK_SIZE = 10;

// render 1 frame per second
const FRAME_DURATION = 200;

// colors used to render the background
const BACKGROUND_STYLE = 'rgba(255, 255, 255, 1)';
const FOREGROUND_STYLE = 'rgba(0, 0, 0, 0.1)';

// list of available shapes
const AVAILABLE_SHAPES = [
	[[1]],
	[[1, 1, 1]],
	[
		[0, 1, 1, 1],
		[1, 1, 1, 0]
	],
	[
		[0, 0, 1],
		[1, 0, 1],
		[0, 1, 1]
	]
];

/**
 * BackgroundCanvas is an animated background for the website
 */
-

export class BackgroundCanvas {
	// canvas 2d rendering context
	private ctx: CanvasRenderingContext2D;

	// timestamp of the previous frame
	private previousTs: number = Date.now();

	// world width (blocks)
	private width: number = 0;
	private widthPx: number = 0;

	// world height (blocks)
	private height: number = 0;
	private heightPx: number = 0;

	// number of live cells required to not add more
	private threshold: number = 0;

	// current and next state buffers
	private currBuffer: boolean[][] = [];
	private nextBuffer: boolean[][] = [];

	/**
	 * Creates an instance and starts the animation
	 */
	public static create(canvas: HTMLCanvasElement) {
		const background = new BackgroundCanvas(canvas);
		return background;
	}
}

	/**
	 * Creates a new BackgroundCanvas instance
	 */
	constructor(private canvas: HTMLCanvasElement) {
		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
	}

	/**
	 * Starts the animation
	 */
	public start() {
		this.resetCanvas();
		this.runAnimation();
		this.setupListeners();
	}

	/**
	 * Resets the canvas and buffers
	 */
	private resetCanvas() {
		// resize canvas to fit window dimensions
		const calculatedWidth = window.innerWidth;
		const calculatedHeight = 410;
		this.width = Math.ceil(calculatedWidth / BLOCK_SIZE);
		this.height = Math.ceil(calculatedHeight / BLOCK_SIZE);
		this.widthPx = this.canvas.width = this.width * BLOCK_SIZE;
		this.heightPx = this.canvas.height = this.height * BLOCK_SIZE;
-

		this.threshold = Math.floor(this.width * this.height * 0.025);
		// clear the canvas, buffers, and start from an empty state
		this.resetBuffer(this.currBuffer);
		this.resetBuffer(this.nextBuffer);
	}

	/**
	 * Updates the state of the animation
	 */
	private runAnimation() {
		if (this.updateState()) {
			this.renderFrame();
		}
		requestAnimationFrame(() => this.runAnimation());
	}

	/**
	 * Listen for clicks on the canvas and add a random shape at the clicked position
	 */
	private setupListeners() {
		this.canvas.addEventListener('click', (event) => {
			const x = Math.floor(event.clientX / BLOCK_SIZE) - 1;
			const y = Math.floor(event.clientY / BLOCK_SIZE) - 1;
			this.addRandomShape(x, y);
		});
	}

	/**
-

	 * Resets the buffer to an empty state
	 */
	private resetBuffer(buffer: Uint8ClampedArray) {
		for (let i = 0; i < buffer.length; i++) {
			buffer[i] = 0;
		}
	}
	 */
	private resetBuffer(buffer: boolean[][]) {
		for (let y = 0; y < this.height; y++) {
			const row: boolean[] = (buffer[y] = []);
			for (let x = 0; x < this.width; x++) {
				row[x] = false;
			}
		}
		return buffer;
	}

	/**
	 * Returns the number of neighbours for the given cell in current state
	 */
	private neighboursCount(x: number, y: number): number {
		let count = 0;
		if (this.currBuffer[y - 1]?.[x - 1]) count++;
		if (this.currBuffer[y - 1]?.[x]) count++;
		if (this.currBuffer[y - 1]?.[x + 1]) count++;
		if (this.currBuffer[y]?.[x - 1]) count++;
		if (this.currBuffer[y]?.[x + 1]) count++;
-

		if (this.currBuffer[y + 1]?.[x - 1]) count++;
		if (this.currBuffer[y + 1]?.[x]) count++;
		if (this.currBuffer[y + 1]?.[x + 1]) count++;
		return count;
	}

	/**
	 * Resolves the next state based on the current state. Returns the number of live cells
	 */
	private resolveNext(): number {
		let liveCells = 0;
		for (let y = 0; y < this.height; y++) {
			const row = this.nextBuffer[y];
			for (let x = 0; x < this.width; x++) {
				if (row[x]) {
					liveCells++;
					continue;
				}
				const neighbours = this.neighboursCount(x, y);
				if (this.currBuffer[y][x]) {
					row[x] = neighbours === 2 || neighbours === 3;
				} else {
					row[x] = neighbours === 3;
				}
				if (row[x]) {
					liveCells++;
				}
			}
-

		}
		return liveCells;
	}

					liveCells++;
				}
			}
		}
		return liveCells;
	}

	/**
	 * Returns a random shape from the list of available shapes
	 */
	private getRandomShape() {
		const randomIdx = Math.floor(Math.random() * AVAILABLE_SHAPES.length);
		return AVAILABLE_SHAPES[randomIdx];
	}

	/**
	 * Adds a random shape to the buffer which will be rendered next
	 */
	private addRandomShape(
		x = Math.floor(Math.random() * this.width),
		y = Math.floor(Math.random() * this.height)
	) {
		const shape = this.getRandomShape();
		this.copyToBuffer(x, y, shape);
-

	}
	/**
	 * Copies a shape to the given buffer
	 */
	private copyToBuffer(x: number, y: number, shape: number[][]) {
		for (let sy = 0; sy < shape.length; sy++) {
			for (let sx = 0; sx < shape[sy].length; sx++) {
				if (shape[sy][sx] && x + sx < this.width && y + sy < this.height) {
					this.nextBuffer[y + sy][x + sx] = true;
				}
			}
		}
	}

	/**
	 * Updates the state using the previous state. Returns true if the state has
	 * changed since the last attempt to update the state.
	 */
	private updateState(): boolean {
		const currentTs = Date.now();
		if (currentTs - this.previousTs < FRAME_DURATION) {
			return false;
		}
		const prevBuffer = this.currBuffer;
		const liveCells = this.resolveNext();
		if (liveCells < this.threshold || Math.random() < 0.01) {
			this.addRandomShape();
		} else {
			this.currBuffer = this.nextBuffer;
			this.nextBuffer = prevBuffer;
		}
		this.previousTs = currentTs;
		return true;
	}
		}
		this.currBuffer = this.nextBuffer;
		this.nextBuffer = this.resetBuffer(prevBuffer);
		this.previousTs = currentTs;
		return true;
	}

	/**
	 * Render the current state on the canvas
	 */
	private renderFrame() {
		// clear the canvas
		this.ctx.fillStyle = BACKGROUND_STYLE;
		this.ctx.fillRect(0, 0, this.widthPx, this.heightPx);
		this.ctx.fillStyle = FOREGROUND_STYLE;
		// render the current state
		for (let y = 0; y < this.height; y++) {
			const row = this.currBuffer[y];
			for (let x = 0; x < this.width; x++) {
				if (row[x]) {
					this.ctx.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
				}
			}
		}
	}
}
