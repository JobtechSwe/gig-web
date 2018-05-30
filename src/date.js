import dayjs from 'dayjs'

const DATE_FORMAT = 'D MMM' // D = day of month, MMM = short month, e.g. jan, apr, dec
export const formatDateRange = (start, end) => `${formatDate(start)} - ${formatDate(end)}`
export const formatDate = (date) => dayjs(date).format(DATE_FORMAT)
