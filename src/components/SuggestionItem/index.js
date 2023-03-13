// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, copyText} = props
  const {suggestion} = item

  const showText = () => {
    copyText(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button onClick={showText} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="logo"
          className="arrow-logo"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
