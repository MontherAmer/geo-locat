import { data } from '../assets';

const isPointInPolynomial = (point: (number | number)[], polynomial: any[]) => {
  polynomial = polynomial[0];
  let x: number = point[1],
    y: number = point[0],
    insidex = false;

  for (let i = 0, j = polynomial.length - 1; i < polynomial.length; j = i++) {
    let xi = polynomial[i][0],
      yi = polynomial[i][1];
    let xj = polynomial[j][0],
      yj = polynomial[j][1];

    let intersect = yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) insidex = !insidex;
  }
  return insidex;
};

export const check = (point: (number | number)[]) => {
  let result = {};
  data.map((item: any, i: Number) => {
    let j = 0;
    if (item.geoJson.length === 1) {
      if (isPointInPolynomial(point, item.geoJson)) result = { name: item.name, code: item.code };
    } else {
      while (item.geoJson[j]) {
        if (isPointInPolynomial(point, item.geoJson[j])) result = { name: item.name, code: item.code };
        j++;
      }
    }
  });
  return result;
};
