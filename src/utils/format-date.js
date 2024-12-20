export function formatDateTime(isoDate) {
  const date = new Date(isoDate);
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