import React from 'react';
import Header from './components/Header';
import InfoMessage from './components/InfoMessage';
import Footer from './components/Footer';
import FilesList from './components/FilesList';
import SearchView from './components/SearchView';
import {
  ESCAPE_CODE,
  HOTKEY_CODE,
  UP_ARROW_CODE,
  DOWN_ARROW_CODE
} from './utils/keyCodes';

export default class App extends React.Component {
  state = {
    isSearchView: false,
    reposList: [],
    reposListForSearch: [],
    counter: 0,
    error: null,
    isLoaded: false
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEvent);
    fetch("https://api.github.com/search/repositories?q=created&sort=stars&order=desc")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            reposList: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEvent);
  }

  handleEvent = (event) => {
    const keyCode = event.keyCode || event.which;
    const { reposList, counter } = this.state;

    switch (keyCode) {
      case HOTKEY_CODE:
        this.setState((prevState) => ({
          isSearchView: true
        }));
        break;
      case ESCAPE_CODE:
        this.setState({ isSearchView: false });
        break;
      case UP_ARROW_CODE:
        if (counter > 0) {
          this.setState({ counter: counter - 1 });
        }
        break;
      case DOWN_ARROW_CODE:
        if (counter < reposList.length - 1) {
          this.setState({ counter: counter + 1 });
        }
        break;
      default:
        break;
    }
  };

  handleSearch = (searchTerm) => {
  let list;
  if (searchTerm) {
    // dynamic regular expression for global and case insensitive search
    const pattern = new RegExp(searchTerm, 'gi');
    // filter out files that match search criteria for name
    list = this.state.reposList
      .filter(
        (repo) =>
          // filter by name
          repo.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1  ||
          // filter by star count
          repo.stargazers_count.toString().includes(searchTerm) ||
          // filter by owner
          repo.owner.login.toLowerCase().includes(searchTerm)
      )
      // pattern to search for, function to execute for each matched patter
      .map((repo) => {
        return {
          ...repo
        };
      });
  } else {
    list = this.state.reposList;
  }

  this.setState({
    reposListForSearch: list,
    counter: 0
  });
};

  render() {
    const { isSearchView, counter, reposList, reposListForSearch, error, isLoaded } = this.state;

    if (error) {
      return (
        <div className="container">
          <Header />
          <div>
            <InfoMessage />
            <div>Error: {error.message}</div>
          </div>
          <Footer />
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="container">
          <Header />
          <div>
            <InfoMessage />
            <div>Loading...</div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container">
          <Header />
          {isSearchView ? (
            <div className="search-view">
              <SearchView onSearch={this.handleSearch} />
              <InfoMessage isSearchView={isSearchView}/>
              <FilesList
                repos={reposListForSearch}
                isSearchView={isSearchView}
                counter={counter}
              />
            </div>
          ) : (
            <div>
              <InfoMessage />
              <FilesList repos={reposList} />
            </div>
          )}
          <Footer />
        </div>
      );
    }
  }
}
