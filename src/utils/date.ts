export const formatDueDate = (dateString: string) => {
  const date = new Date(dateString)
  const options = { month: 'short', day: 'numeric', year: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options as any)
  const [month, day, year] = formattedDate.split(' ')

  return `Due ${day.padStart(2, '0')} ${month} ${year}`
}
