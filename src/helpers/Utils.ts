import _ from 'lodash'
import dayjs from 'dayjs'

export function preparePageOptions(options) {
  options.sortBy = stringifyClean(options.sortBy);
  return options;
}

export function stringifyClean(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  return arr
    .map(obj => {
      return Object.entries(obj)
        .map(([key, value]) => `${value}`)
        .join(":");
    })
    .join(",");
}

export function mapToEntity(constructor, arr) {
  return arr.map(obj => constructor(obj));
}

export function formatDate(date) {
  if (!date) return "";
  return dayjs(date).format('DD/MM/YYYY');
}
