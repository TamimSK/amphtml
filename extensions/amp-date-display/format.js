/**
 * @fileoverview Shared implementations of date formatting and variable
 * providers for Bento and Classic amp-date-display.
 * TODO(alanorozco): Include getVariablesInUTC and getVariablesInLocal.
 */
/**
 * @param {!Date} date
 * @param {string} locale
 * @param {?Object<string, *>} options
 * @param {string=} format ('long' by default)
 * @return {string}
 * @private
 */
export function getTimeZoneName(date, locale, options, format = 'long') {
  if (!Intl?.DateTimeFormat) {
    return '';
  }
  const formatter = new Intl.DateTimeFormat(locale, {
    timeZone: options?.timeZone,
    timeZoneName: format,
  });
  return (
    formatter.formatToParts(date).find(({type}) => type === 'timeZoneName')
      ?.value || ''
  );
}
