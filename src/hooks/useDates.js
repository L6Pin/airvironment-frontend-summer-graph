import moment from "moment";

const returnDate = (date) => moment.utc(date).format("DD. MMM. YYYY");
const returnDay = (date) => moment.utc(date).format("ddd");
const returnHour = (date) => moment.utc(date).format("HH");
const isSameDay = (date1, date2) =>
  moment.utc(date1).isSame(moment.utc(date2), "day");

export default function useDates() {
  return {
    returnDate,
    returnDay,
    returnHour,
    isSameDay,
  };
}
