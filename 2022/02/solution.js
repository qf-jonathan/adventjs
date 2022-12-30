function countHours(year, holidays) {
  const validDates = holidays.filter((holiday) => {
    const dayOfWeek = new Date(`${year}/${holiday}`).getDay()
    return dayOfWeek !== 0 && dayOfWeek !== 6
  })
  return validDates.length * 2
}


export {countHours}
