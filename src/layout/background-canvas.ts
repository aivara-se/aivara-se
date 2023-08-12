import "./background-canvas.css";

// blocks are 10px by 10px
const BLOCK_SIZE = 10;

// render 1 frame per second
const FRAME_DURATION = 200;

// colors used to render the background
const BACKGROUND_COLOR = "rgba(255, 255, 255, 1)";
const FOREGROUND_COLOR = "rgba(0, 0, 0, 0.1)";

// list of available shapes
const AVAILABLE_SHAPES = [
  [[1]],
  [[1, 1, 1]],
  [
    [0, 1, 1, 1],
    [1, 1, 1, 0],
  ],
  [
    [0, 0, 1],
    [1, 0, 1],
    [0, 1, 1],
  ],
];

/**
 * BackgroundCanvas is an animated background for the website
 */
export class BackgroundCanvas {
  // background canvas
  private canvas: HTMLCanvasElement;

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

  // number of live cells
  private liveCells: number = 0;

  // number of live cells required to not add more
  private threshold: number = 0;

  // current and next state buffers
  private currBuffer: boolean[][] = [];
  private tempBuffer: boolean[][] = [];

  /**
   * Creates an instance and starts the animation
   */
  public static start(selector: string) {
    const background = new BackgroundCanvas(selector);
    background.start();
  }

  /**
   * Creates a new BackgroundCanvas instance
   */
  constructor(selector: string) {
    this.canvas = document.querySelector(selector) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  /**
   * Starts the animation
   */
  public start() {
    this.resetCanvas();
    this.runAnimation();
  }

  /**
   * Resets the canvas and buffers
   */
  private resetCanvas() {
    // resize canvas to fit window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    this.width = Math.ceil(windowWidth / BLOCK_SIZE);
    this.height = Math.ceil(windowHeight / BLOCK_SIZE);
    this.widthPx = this.canvas.width = this.width * BLOCK_SIZE;
    this.heightPx = this.canvas.height = this.height * BLOCK_SIZE;
    this.threshold = Math.floor(this.width * this.height * 0.025);
    // clear the canvas, buffers, and start from an empty state
    this.resetBuffer(this.currBuffer);
    this.resetBuffer(this.tempBuffer);
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
   * Resets the buffer to an empty state
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
   * Returns the number of neighbours for the given cell
   */
  private neighboursCount(buffer: boolean[][], x: number, y: number): number {
    let count = 0;
    if (buffer[y - 1]?.[x - 1]) count++;
    if (buffer[y - 1]?.[x]) count++;
    if (buffer[y - 1]?.[x + 1]) count++;
    if (buffer[y]?.[x - 1]) count++;
    if (buffer[y]?.[x + 1]) count++;
    if (buffer[y + 1]?.[x - 1]) count++;
    if (buffer[y + 1]?.[x]) count++;
    if (buffer[y + 1]?.[x + 1]) count++;
    return count;
  }

  /**
   * Resolves the next state based on the current state. Returns the next state.
   */
  private resolveNext(current: boolean[][], output: boolean[][]): boolean[][] {
    this.liveCells = 0;
    for (let y = 0; y < this.height; y++) {
      const row = output[y];
      for (let x = 0; x < this.width; x++) {
        const neighbours = this.neighboursCount(current, x, y);
        if (current[y][x]) {
          row[x] = neighbours === 2 || neighbours === 3;
        } else {
          row[x] = neighbours === 3;
        }
        if (row[x]) {
          this.liveCells++;
        }
      }
    }
    if (this.liveCells < this.threshold || Math.random() < 0.01) {
      const x = Math.floor(Math.random() * this.width);
      const y = Math.floor(Math.random() * this.height);
      this.copyToBuffer(x, y, output, this.getRandomShape());
    }
    return output;
  }

  /**
   * Returns a random shape from the list of available shapes
   */
  private getRandomShape() {
    const randomIdx = Math.floor(Math.random() * AVAILABLE_SHAPES.length);
    return AVAILABLE_SHAPES[randomIdx];
  }

  /**
   * Copies a shape to the given buffer
   */
  private copyToBuffer(x: number, y: number, b: boolean[][], s: number[][]) {
    for (let sy = 0; sy < s.length; sy++) {
      for (let sx = 0; sx < s[sy].length; sx++) {
        if (s[sy][sx] && x + sx < this.width && y + sy < this.height) {
          b[y + sy][x + sx] = true;
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
    const tempBuffer = this.tempBuffer;
    this.currBuffer = this.resolveNext(prevBuffer, tempBuffer);
    this.tempBuffer = this.resetBuffer(prevBuffer);
    this.previousTs = currentTs;
    return true;
  }

  /**
   * Render the current state on the canvas
   */
  private renderFrame() {
    // clear the canvas
    this.ctx.fillStyle = BACKGROUND_COLOR;
    this.ctx.fillRect(0, 0, this.widthPx, this.heightPx);
    this.ctx.fillStyle = FOREGROUND_COLOR;
    // render the current state
    for (let y = 0; y < this.height; y++) {
      const row = this.currBuffer[y];
      for (let x = 0; x < this.width; x++) {
        if (row[x]) {
          this.ctx.fillRect(
            x * BLOCK_SIZE + 1,
            y * BLOCK_SIZE + 1,
            BLOCK_SIZE - 2,
            BLOCK_SIZE - 2
          );
        }
      }
    }
  }
}
