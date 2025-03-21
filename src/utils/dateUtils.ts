export function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  };
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const dateFormatter = new Intl.DateTimeFormat("pl-PL", dateOptions);
  const timeFormatter = new Intl.DateTimeFormat("pl-PL", timeOptions);

  return `${dateFormatter.format(date)} (${timeFormatter.format(date)})`;
}

export function isDateInThePast(isoDate: string) {
  return new Date(isoDate).getTime() <= new Date().getTime();
}
