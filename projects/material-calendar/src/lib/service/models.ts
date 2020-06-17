/**
 * @param {boolean}   autoTextColor           Sets the text color automatically, based on the backgroud colors
 * @param {boolean}   calendarWeek            display the calendar week
 * @param {boolean}   useHolidays             use holidays, only german (for now)
 * @param {boolean}   displayYear             displays the year next to the Month name
 * @param {boolean}   switches                not fullt implemented!
 * @param {string}    panelBgColor            sets the background color of the panel
 * @param {string}    textColor               if autoTextColor false this must be set to a custom color
 * @param {string}    holidayColor            sets the background color of the holiday field
 * @param {string}    holidayTextColor        sets the text color of the holiday field
 * 
 */
export interface CalendarConfig {
    autoTextColor: boolean;
    calendarWeek: boolean;
    useHolidays: boolean;
    displayYear: boolean;
    switches: boolean;
    panelBgColor?: string;
    textColor?: string;
    holidayColor?: string;
    holidayTextColor?: string;
}

export interface Calendar {
    year: number;
    dayNames: String[];
    months: Month[];
}
export interface Month {
    name: string;
    days: Day[]
}
export interface Day {
    day: number;
    date: Date;
    kw: number;
    isWeekendDay: boolean;
    isHoliday: boolean;
}