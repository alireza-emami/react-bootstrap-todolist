import moment from "moment"

/**
 * Converts a date object to ISO string
 * @param {Date} date 
 * @returns {string}
 */
export function dateToISOString(date) {
    return date.toISOString()
}
/**
 * Converts an ISO string to a Dte object
 * @param {string} isoString 
 * @returns {Date}
 */
export function isoStringToDate(isoString) {
    return new Date(isoString)
}
/**
 * Calculates the duration of the  input date from now
 * @param {Date} date 
 * @returns {moment.Duration} 
 */
export function calcDurationFromNow(date) {
    return moment.duration(moment().diff(date))
}
/**
 * Calculates and humanize the duration of the  input date from now
 * @param {Date} date 
 * @returns {string} 
 */
export function calcAndHumanizeDurationFromNow(date){
    return calcDurationFromNow(date).humanize()
}
