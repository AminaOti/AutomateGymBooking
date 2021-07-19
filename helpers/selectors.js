const day_selector = {
    Monday: '.bb-days__day:nth-child(8)',
    Tuesday: 'xxxxx',
    Wednesday: 'xxxxx',
    Thursday: '.bb-days__day:nth-child(7) > .bb-days__name',
    Friday: 'xxxxx'
}

const activity_selector = {
    evening_swim: '.bb-timetable__row:nth-child(39) .button"',
    hitt_630: '.bb-timetable__row:nth-child(1) .button'
}

module.exports = { day_selector, activity_selector }


