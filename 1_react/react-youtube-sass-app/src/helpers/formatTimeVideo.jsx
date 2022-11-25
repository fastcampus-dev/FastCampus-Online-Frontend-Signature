const formatTimeVideo = str => {
  if(!str.startsWith('PT')){
    return null
  }
  const time = str.substring(2)
  let duration = ''
  for(let i = 0; i < time.length; i++){
    if(!Number(time[i])){
      duration += ':'
    } else if(i > 0 && !Number(time[i-1]) && !Number(time[i+1])){
      duration += '0' + time[i]
    } else {
      duration += time[i]
    }
  }

  if (time.indexOf('H') !== -1 && time.indexOf('M') === -1 && time.endsWith('S')) {
    const [hour, min] = duration.slice(0, -1).split(':')
    return `${hour}:00:${min}`
  } else if(time.endsWith('M')) {
    return duration + '00'
  } else if (duration.endsWith('::')) {
    return duration.slice(0, -2)
  } else {
    const result = duration.replace('::', ":")
    return result.slice(0, -1)
  }
}

export default formatTimeVideo

