import dayjs from "dayjs"
import { isAfter, isBefore, formatISO } from "date-fns"

const now = new Date();
const before = new Date("2000-01-01")
console.log(dayjs(now).isAfter(before))
console.log(dayjs(now).isBefore(before))
console.log(dayjs(now).format("YYYY-MM-DDTHH:mm:ssZ"))
console.log(isAfter(now, before))
console.log(isBefore(now, before))
console.log(formatISO(now))