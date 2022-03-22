export class HeatingSimul {
  order: number;
  heatValue: number = 16.8;
  heatOn: boolean = false;

  constructor(order: number) {
    this.order = order;
    this.run();
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  heat() {
    if (this.order > this.heatValue) {
      this.heatOn = true;
      this.heatValue += 0.1;
    } else {
      this.heatOn = false;
      this.heatValue -= 0.1;
    }
  }

  async run() {
    while (true) {
      this.heat();
      await this.delay(1000);
    }
  }
}
