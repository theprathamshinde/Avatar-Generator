import React from 'react'
import { useTheme } from '../../themeContext'
import { EyeProps } from './types'
import { LeftLash, RightLash } from './Lashes'

export const SquintEyes = ({ withLashes }: EyeProps) => {
  const { colors, skin } = useTheme()

  return (
    <>
      <path
        d="M271.4,576.82c-1-28.36,18-52.36,43.28-63.56a62.37,62.37,0,0,1,8.16-2.7,70,70,0,0,1,42.21,2.68A71.67,71.67,0,0,1,374,517.4c29.53,15.88,42.79,53.25,31.36,83.46a61.68,61.68,0,0,1-4.18,8.82,54.68,54.68,0,0,1-17.51,20.83,69.25,69.25,0,0,1-7.85,5c-27.38,13-64.38,9-86.45-11.4a69.35,69.35,0,0,1-6.11-7.47,64.89,64.89,0,0,1-5.57-9.5A55.78,55.78,0,0,1,272,585.39,75.67,75.67,0,0,1,271.4,576.82Z"
        fill={skin.shadow}
      />
      <path
        d="M269.77,558.47c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.25,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.4a67.24,67.24,0,0,1-6.11-7.47,65,65,0,0,1-5.58-9.5A55.59,55.59,0,0,1,270.32,567,71.3,71.3,0,0,1,269.77,558.47Z"
        fill={colors.white}
      />
      <circle cx="338.51" cy="559.08" r="12.24" fill={colors.outline} />
      <path
        d="M339.2,490.12a68.31,68.31,0,0,0-48.45,20.07,69.79,69.79,0,0,0-6.86,8,73.12,73.12,0,0,0-10.3,18.39H403.92a58.59,58.59,0,0,0-20.12-30,69.37,69.37,0,0,0-6.28-4.79A68.21,68.21,0,0,0,339.2,490.12Z"
        fill={skin.base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <path
        d="M274.09,581.45c5.5,13.75,15.3,25.93,27.92,33.32a68.27,68.27,0,0,0,10.15,4.7c24.63,9.09,55,5.07,74.49-11.61a69.9,69.9,0,0,0,7.29-7.61,55.62,55.62,0,0,0,4.6-6.42,77.37,77.37,0,0,0,4.94-12.38Z"
        fill={skin.base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <path
        d="M269.77,558.47c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.25,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.4a67.24,67.24,0,0,1-6.11-7.47,65,65,0,0,1-5.58-9.5A55.59,55.59,0,0,1,270.32,567,71.3,71.3,0,0,1,269.77,558.47Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M583.89,568.76c.43-15.13,6.67-30.09,15.1-41.33a72.82,72.82,0,0,1,7.12-8.53A69.73,69.73,0,0,1,696.28,510a73.27,73.27,0,0,1,6.53,5.13c27,21.45,30.12,63.14,15.32,93.23a62.31,62.31,0,0,1-4.78,6.86,72.09,72.09,0,0,1-7.58,8.13c-20.27,17.83-51.81,22.13-77.41,12.42a71.34,71.34,0,0,1-10.55-5c-17.9-10.78-30.37-31.09-33.43-52.23A62.93,62.93,0,0,1,583.89,568.76Z"
        fill={skin.shadow}
      />
      <path
        d="M589.38,557.26c.42-14.15,6.42-28.15,14.52-38.66a70.56,70.56,0,0,1,6.86-8,68.55,68.55,0,0,1,86.77-8.37,69.81,69.81,0,0,1,6.28,4.79c26,20.07,29,59.07,14.74,87.22a56.5,56.5,0,0,1-4.6,6.42,68.91,68.91,0,0,1-7.29,7.6C687.15,625,656.8,629,632.17,619.9A68.79,68.79,0,0,1,622,615.19c-17.22-10.08-29.22-29.08-32.17-48.85A56.34,56.34,0,0,1,589.38,557.26Z"
        fill={colors.white}
      />
      <circle cx="659.21" cy="559.08" r="12.24" fill={colors.outline} />
      <path
        d="M659.21,490.55a68.31,68.31,0,0,0-48.45,20.07,70.56,70.56,0,0,0-6.86,8A73.3,73.3,0,0,0,593.6,537H723.93A58.63,58.63,0,0,0,703.81,507a69.81,69.81,0,0,0-6.28-4.79A68.21,68.21,0,0,0,659.21,490.55Z"
        fill={skin.base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <path
        d="M594.1,581.87c5.51,13.76,15.3,25.94,27.92,33.32a68.79,68.79,0,0,0,10.15,4.71c24.63,9.09,55,5.06,74.49-11.62a68.91,68.91,0,0,0,7.29-7.6,56.5,56.5,0,0,0,4.6-6.42,76.19,76.19,0,0,0,4.94-12.39Z"
        fill={skin.base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <path
        d="M589.38,557.26c.42-14.15,6.42-28.15,14.52-38.66a70.56,70.56,0,0,1,6.86-8,68.55,68.55,0,0,1,86.77-8.37,69.81,69.81,0,0,1,6.28,4.79c26,20.07,29,59.07,14.74,87.22a56.5,56.5,0,0,1-4.6,6.42,68.91,68.91,0,0,1-7.29,7.6C687.15,625,656.8,629,632.17,619.9A68.79,68.79,0,0,1,622,615.19c-17.22-10.08-29.22-29.08-32.17-48.85A56.34,56.34,0,0,1,589.38,557.26Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />

      {withLashes && (
        <>
          <LeftLash />
          <RightLash />
        </>
      )}
    </>
  )
}
