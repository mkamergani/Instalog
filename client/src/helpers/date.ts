const getReadableDate = (inputDate: string): string => {
  const date = new Date(Date.parse(inputDate));
  let month = date.toLocaleString("default", { month: "short" });
  let day = date.getDate();
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${month} ${day}, ${hours}:${minutes} ${ampm}`;
};

export default getReadableDate;
