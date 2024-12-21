export function formatDateTime(isoDate, format) {
  const date = new Date(isoDate);
  if (format == "day-only") {
    return date.toLocaleString('es-ES', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  }

  return date.toLocaleString('es-ES', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}