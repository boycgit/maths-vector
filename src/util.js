const defaultDegreeUnit = 180 / Math.PI;

export function radian2degree(rad, multiply) {
  if (!!multiply) {
    return multiply(rad, defaultDegreeUnit).toString();
  } else {
    return rad * defaultDegreeUnit;
  }
}

export function degree2radian(deg, divide) {
  if (!!divide) {
    return divide(deg, defaultDegreeUnit);
  } else {
    return deg / defaultDegreeUnit;
  }
}
