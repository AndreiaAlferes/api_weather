import { previsao } from '../../model/previsao.js';

// eslint-disable-next-line arrow-body-style
export function calculateAvgTemp(previsaoItem: previsao): number {
  return (previsaoItem.minTemp + previsaoItem.maxTemp) / 2;
}
