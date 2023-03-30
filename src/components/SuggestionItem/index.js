// Write your code here

import './index.css'

const SugggestionItem = props => {
  const {everySuggestion, onClickBtn} = props
  const {suggestion} = everySuggestion

  const onClickArrow = () => {
    onClickBtn(suggestion)
  }

  return (
    <li>
      <div className="suggestion-arrow-container">
        <p className="suggestions">{suggestion}</p>
        <img
          onClick={onClickArrow}
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </div>
    </li>
  )
}

export default SugggestionItem
