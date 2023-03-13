import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    // const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  copyText = suggestion => {
    // const {searchInput} = this.state
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(item =>
      item.suggestion.includes(searchInput),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google"
          className="google-name"
        />
        <div className="search-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
        <ul className="suggestions">
          {filteredList.map(item => (
            <SuggestionItem
              item={item}
              key={item.id}
              copyText={this.copyText}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
