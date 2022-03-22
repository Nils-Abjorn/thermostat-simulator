import { HeatingSimul } from "./HeatingSimul";

type DaySettings = {
  startHour: 8;
  endHour: 20;
  dayTemp: 19;
  nightTemp: 18;
};

export class Thermostat {
  private clock = 9;
  daysSettings: DaySettings[] = new Array<DaySettings>(7);
  date = new Date();
  simul = new HeatingSimul(this.getCurrentOrder());

  getCurrentSettings(): DaySettings {
    return this.daysSettings[this.date.getDate()];
  }
  getCurrentOrder(): number {
    const settings = this.getCurrentSettings();
    if (this.clock > settings.startHour && this.clock <= settings.endHour) {
      return settings.dayTemp;
    }
    return settings.nightTemp;
  }

  setClock(h: number) {
    this.clock = h;
    this.simul.order = this.getCurrentOrder();
  }

  getHeatValue(): number {
    return this.simul.heatValue;
  }

  getHeating(): boolean {
    return this.simul.heatOn;
  }
}
