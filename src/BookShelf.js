import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
	render() {
		const { title, books } = this.props

		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book key={book.id} addedBooks={books} book={book} onChangeShelf={this.props.onChangeShelf} />
            ))}
          </ol>
        </div>
      </div>
		)
	}
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf