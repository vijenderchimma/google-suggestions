// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickArrowBtn = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="content-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-content-container">
            <div className="search-input-container">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="search-icon"
                />
              </div>
              <div>
                <input
                  type="search"
                  placeholder="Search Google"
                  value={searchInput}
                  className="search-input"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <ul className="unordered-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  everySuggestion={eachSuggestion}
                  key={eachSuggestion.id}
                  onClickBtn={this.onClickArrowBtn}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
