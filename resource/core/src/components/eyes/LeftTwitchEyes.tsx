import React from 'react'
import { useTheme } from '../../themeContext'
import { EyeProps } from './types'
import { LeftLash, RightLash } from './Lashes'

export const LeftTwitchEyes = ({ withLashes }: EyeProps) => {
  const { skin, colors } = useTheme()

  return (
    <>
      <path
        d="M271.4,568.53c-1-28.36,18-52.36,43.28-63.56a62.37,62.37,0,0,1,8.16-2.7A70,70,0,0,1,365.05,505a71.67,71.67,0,0,1,8.93,4.16c29.53,15.89,42.79,53.25,31.36,83.46a61.68,61.68,0,0,1-4.18,8.82,54.68,54.68,0,0,1-17.51,20.83,69.25,69.25,0,0,1-7.85,5c-27.38,13-64.38,9-86.45-11.4a68.39,68.39,0,0,1-6.11-7.47,64.89,64.89,0,0,1-5.57-9.5A55.78,55.78,0,0,1,272,577.1,75.67,75.67,0,0,1,271.4,568.53Z"
        fill={skin.shadow}
      />
      <path
        d="M269.77,550.18c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.26,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.39a68.28,68.28,0,0,1-6.11-7.48,65,65,0,0,1-5.58-9.5,55.59,55.59,0,0,1-5.71-21.73A71.3,71.3,0,0,1,269.77,550.18Z"
        fill={colors.white}
      />
      <circle cx="338.51" cy="541.79" r="12.24" fill={colors.outline} />
      <path
        d="M399.52,583a59.6,59.6,0,0,0,4.18-8.82,62.5,62.5,0,0,0,2.57-8.64c-68.32-7.75-127,20.81-127,20.81l1.1,1.75c.41.62.82,1.24,1.25,1.84a68.28,68.28,0,0,0,6.11,7.48c22.06,20.36,59.06,24.36,86.44,11.39a68.37,68.37,0,0,0,7.85-5,63.08,63.08,0,0,0,7.12-6.07,64.78,64.78,0,0,0,5.68-7A63.85,63.85,0,0,0,399.52,583Z"
        fill={skin.base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="6px"
      />
      <path
        d="M269.77,550.18c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.26,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.39a68.28,68.28,0,0,1-6.11-7.48,65,65,0,0,1-5.58-9.5,55.59,55.59,0,0,1-5.71-21.73A71.3,71.3,0,0,1,269.77,550.18Z"
        stroke={colors.outline}
        strokeMiterlimit={10}
        fill="none"
        strokeWidth="12px"
      />
      <path
        d="M583.89,560.47c.43-15.13,6.67-30.09,15.1-41.33a72.82,72.82,0,0,1,7.12-8.53,69.73,69.73,0,0,1,90.17-8.95,73.27,73.27,0,0,1,6.53,5.13c27,21.45,30.12,63.14,15.32,93.23a62.31,62.31,0,0,1-4.78,6.86,72.09,72.09,0,0,1-7.58,8.13c-20.27,17.83-51.81,22.13-77.41,12.42a71.34,71.34,0,0,1-10.55-5c-17.9-10.78-30.37-31.09-33.43-52.23A62.93,62.93,0,0,1,583.89,560.47Z"
        fill={skin.base}
      />
      <path
        d="M589.38,549c.42-14.15,6.42-28.15,14.52-38.66a70.56,70.56,0,0,1,6.86-8A68.55,68.55,0,0,1,697.53,494a69.81,69.81,0,0,1,6.28,4.79c26,20.07,29,59.07,14.74,87.22a56.5,56.5,0,0,1-4.6,6.42,68.91,68.91,0,0,1-7.29,7.6c-19.51,16.68-49.86,20.71-74.49,11.62A68.79,68.79,0,0,1,622,606.9c-17.22-10.08-29.22-29.08-32.17-48.85A56.34,56.34,0,0,1,589.38,549Z"
        stroke={colors.outline}
        fill={colors.white}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <circle cx="659.21" cy="550.79" r="12.24" fill={colors.outline} />
      <path
        d="M718.86,618.11c-10.23,5-20.32,9.55-31.34,12.69a97.34,97.34,0,0,1-16.46,3.3,141.1,141.1,0,0,1-17.69.3A144.2,144.2,0,0,1,633,632.48c-1.93-.31-4.13.51-4.62,2.62-.41,1.81.55,4.28,2.62,4.62a164.26,164.26,0,0,0,19.66,2.1c3.19.13,6.37.06,9.56.16a78.25,78.25,0,0,0,9.06-.21c12-1,23.62-4.28,34.76-8.76,6.32-2.55,12.52-5.4,18.63-8.42a3.77,3.77,0,0,0,1.34-5.13,3.83,3.83,0,0,0-5.13-1.35Z"
        fill={colors.outline}
      />
      <path
        d="M365.31,627.42c-11.37,2.16-22.4,3.8-34.06,3.83a95.68,95.68,0,0,1-17-1.36,171.78,171.78,0,0,1-35.56-11.64,3.85,3.85,0,0,0-5.13,1.35c-.95,1.62-.5,4.27,1.34,5.13a164.42,164.42,0,0,0,17.87,7.1c2.91,1,5.87,1.7,8.78,2.6a91.22,91.22,0,0,0,8.91,2.35c11.95,2.42,24.22,2.37,36.31,1,6.88-.76,13.71-1.88,20.51-3.17,2-.37,3.12-2.77,2.62-4.61a3.83,3.83,0,0,0-4.62-2.62Z"
        fill={colors.outline}
      />

      {withLashes && (
        <g transform="translate(0 -5)">
          <LeftLash />
          <RightLash />
        </g>
      )}
    </>
  )
}
