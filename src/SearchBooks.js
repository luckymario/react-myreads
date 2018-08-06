import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
	state = {
		query: '',
		listBooks: []
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query: query
		}))

		BooksAPI.search(query)
    .then((listBooks) => {
    	if (!listBooks || listBooks.error) {
    		this.setState({listBooks: []})

    	} else if (Array.isArray(listBooks)) {
	      this.setState(() => ({
	        listBooks
	      }))
 		  }
    })
	}

	render() {
		const { query, listBooks } = this.state
		//console.log(listBooks)

		/*const listBooks = query === '' ? [] : books.filter((b) => (
				b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase())
			))*/

		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
						{/*listBooks.map((book) => (
              	<Book key={book.id} book={book} onChangeShelf={this.props.onChangeShelf} />
            	)
            )*/}
            {listBooks.map((book) => (
            		<Book key={book.id} addedBooks={this.props.books} book={book} onChangeShelf={this.props.onChangeShelf} />
            	)
            )}
          </ol>
          {query !== '' && listBooks.length === 0 && (
						<p>Books no found</p>
					)}
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