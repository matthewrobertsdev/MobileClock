export const lightColors={
  Red: 'rgb(255,59,48)',
  Orange: 'rgb(255,149,2)',
  Yellow: 'rgb(255,204,2)',
  Green: 'rgb(41,205,64)',
  Blue: 'rgb(3,122,255)',
  Indigo: 'rgb(88,86,215)',
  Purple: 'rgb(175,82,222)',
  Pink: 'rgb(255,45,85)',
  Brown: 'rgb(209,103,74)',
}

export const darkColors={
  Red: 'rgb(171, 0, 27)',
  Orange: 'rgb(179, 63, 0)',
  Yellow: 'rgb(189, 134, 9))',
  Green: 'rgb(0, 106, 0)',
  Blue: 'rgb(2, 76, 182)',
  Indigo: 'rgb(59,59,152)',
  Purple: 'rgb(96, 31, 159)',
  Pink: 'rgb(167, 40, 103)',
  Brown: 'rgb(130,64,46)',
}

export const colorNames=['Red', 'Orange', 'Yellow', 'Green', 'Blue', 
'Indigo', 'Purple', 'Pink', 'Brown']

export const lightDarkBackground='rgb(28,28,30)'
export const darkLightBackground='rgb(242,242,247)'

export const getTextColor=(settings, isDarkMode) => {
  if (settings.colorForForeground) {
    if (settings.usesNightMode) {
      return isDarkMode ? darkColors[settings.colorChoice] :
        lightColors[settings.colorChoice]
    } else if (!settings.usesNightMode) {
      return lightColors[settings.colorChoice]
    }
  } else {
    if (settings.usesNightMode) {
      return 'black'
    } else {
      return isDarkMode ? 'white' :
      'black'
    }
  }
}

export const getBackgroundColor=(settings, isDarkMode) => {
  if (settings.colorForForeground) {
    return 'rgb(30,30,30)'
  } else {
    return isDarkMode ? darkColors[settings.colorChoice] :
            lightColors[settings.colorChoice]
  }
}


export const getIconColor=(settings, isDarkMode) => {
  if (isDarkMode) {
    if (settings.usesNightMode) {
      return '#999999'
    } else {
      return 'white'
    }
  } else {
    return 'black'
  }
}