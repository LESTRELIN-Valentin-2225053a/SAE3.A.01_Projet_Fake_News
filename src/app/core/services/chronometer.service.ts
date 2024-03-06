import { Injectable } from '@angular/core';


/**
 * Service for managing a chronometer to track elapsed time.
 */
@Injectable({
  providedIn: 'root'
})
export class ChronometerService {
  /** The elapsed time in seconds. */
  private _elapsedTime: number = 0;

  /** The timer interval used to update the elapsed time. */
  private timer: NodeJS.Timeout;

  /**
   * Starts the chronometer by setting up a timer to update the elapsed time every second.
   */
  startTimer(): void {
    this.timer = setInterval(() => {
      ++this._elapsedTime;
    }, 1000);
  }

  /**
   * Resets the chronometer by stopping the timer and resetting the elapsed time to zero.
   */
  reset(): void {
    clearInterval(this.timer);
    this._elapsedTime = 0;
  }

  get elapsedTime(): number {
    return this._elapsedTime;
  }

  /**
   * Gets the elapsed time as a formatted string representing hours, minutes, and seconds.
   * @returns The elapsed time formatted as "Xh Ym Zs".
   */
  getElapsedTimeAsString(): string {
    return Math.floor(this._elapsedTime / 3600) + "h " +
      Math.floor((this._elapsedTime % 3600) / 60) + "m " +
      this._elapsedTime % 60 + "s";
  }
}
