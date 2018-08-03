import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query: query
		}))
	}

	render() {
		const { query } = this.state
		const { books } = this.props

		const listBooks = query === '' ? [] : books.filter((b) => (
				b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase())
			))

		const listBooksAPI = BooksAPI.search('anroid')
		console.log(listBooksAPI)

		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>

          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
						{listBooks.map((book) => (
              	<Book key={book.id} book={book} onChangeShelf={this.props.onChangeShelf} />
            	)
            )}
          </ol>
        </div>
      </div>
		)
	}
}

SearchBooks.propTypes = {
	books: PropTypes.array.isRequired,
	onChangeShelf: PropTypes.func.isRequired
}

export default SearchBooks