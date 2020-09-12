import { css } from 'styled-components'

const sizes = {
  mobile: 550,
  tablet: 625,
  smallDesktop: 860,
}

const media = Object.keys(sizes).reduce((accu, label) => {
  accu[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return accu
}, {})

export default media
