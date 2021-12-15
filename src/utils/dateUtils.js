import * as luxon from 'luxon'

export const browserDateFormat = (() => {
	let dt = luxon.DateTime.local()

	return dt
		.toJSDate()
		.toLocaleDateString()
		.replace(dt.day.toString().padStart(2, '0'), 'dd')
		.replace(dt.month.toString().padStart(2, '0'), 'MM')
		.replace(dt.year, 'yyyy')
})()

export const browserDateTimeFormat = (() => {
	let dt = luxon.DateTime.local()

	return dt
		.toJSDate()
		.toLocaleString()
		.replace(dt.day.toString().padStart(2, '0'), 'dd')
		.replace(dt.month.toString().padStart(2, '0'), 'MM')
		.replace(dt.year, 'yyyy')
		.replace(dt.hour.toString().padStart(2, '0'), 'HH')
		.replace(dt.minute.toString().padStart(2, '0'), 'mm')
		.replace(dt.second.toString().padStart(2, '0'), 'ss')
})()

export const browserTimeFormat = (() => {
	return 'HH:mm'
})()
