import css from 'styled-jsx/css'

const styler = props => {
  return css.resolve`
    :global(
      html,
      body, 
      #__next
    ) { 
      height: 100%; 
      margin: 0;
      padding: 0;
    }

    :global(#__next) {
      display: grid;
      grid-template-rows: auto 1fr auto;
    }
  `
}

export default styler
