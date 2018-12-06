import css from 'styled-jsx/css'

const styler = props => {
  return css.resolve`
    header {
      background: black;
      color: white;
      padding: 1rem;
    }
  `
}

export default styler
