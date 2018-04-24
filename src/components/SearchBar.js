import React from 'react';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        teamOne: '',
        teamTwo: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleSubmit(evt) {
      evt.preventDefault()
      const searchTerm = evt.target.search.value
      this.setState({
          teamOne: evt.target.searchTeamOne,
          teamTwo: evt.target.searchTeamTwo
      })
    }
  
    render() {
      return (
          <div>
      <div className="search-box">
      <form onSubmit={this.handleSubmit}>
      <div className="fas fa-search" />
        <input name="searchTeamOne" id="search-field" >
        </input>
        <button type="submit">Team One</button>
      </form>
      </div>
            <div className="search-box">
            <form onSubmit={this.handleSubmit}>
            <div className="fas fa-search" />
              <input name="searchTeamTwo" id="search-field" >
              </input>
              <button type="submit">Team Two</button>
            </form>
            </div>
            </div>
      )
    }
  }

  export default Search;