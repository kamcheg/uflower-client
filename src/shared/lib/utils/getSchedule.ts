import type {ISchedule} from "~/shared/types/common";

export function getSchedule(event?: ISchedule) {
  if (!event?.from || !event?.to) {
    return ''
  }

  if (event.isAlwaysOpened) {
    return 'Круглосуточно'
  }

  return `Ежедневно с ${event.from} до ${event.to}`
}
