import { previsao } from '../../model/previsao.js';

// eslint-disable-next-line arrow-body-style
export function calculateAvgTemp(previsaoItem: previsao): number {
  return (previsaoItem.minTemp + previsaoItem.maxTemp) / 2;
}

export function calculateAvgTempFar(previsaoItem: previsao): number {
  return (
    (1.8 * previsaoItem.maxTemp + 32 + (1.8 * previsaoItem.minTemp + 32)) / 2
  );
}

export function calculateFahrenheitMax(previsaoItem: previsao): number {
  return 1.8 * previsaoItem.maxTemp + 32;
}

export function calculateFahrenheitMin(previsaoItem: previsao): number {
  return 1.8 * previsaoItem.minTemp + 32;
}

export function calculateExtenssDate(previsaoItem: previsao) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dt = new Date(previsaoItem.date);
  const weekly = days[dt.getDay()];
  const day = dt.getDate();
  const month = months[dt.getMonth()];
  const year = dt.getFullYear();

  return `${weekly}, ${day} ${month} of ${year}`;
}

export function getColorUvIndex(uvIndex: number): string {
  if (uvIndex < 3) {
    return 'green';
  }
  if (uvIndex < 6) {
    return 'yellow';
  }
  if (uvIndex < 8) {
    return 'orange';
  }
  if (uvIndex < 11) {
    return 'red';
  }
  return 'violet';
}
