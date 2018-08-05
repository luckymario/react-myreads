import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
	render() {
    const { addedBooks, book, onChangeShelf } = this.props
    const { id, title, authors } = this.props.book
    const thumbnail = book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : ''
    const index = addedBooks.findIndex(b => b.id === id)
    const shelf = book.hasOwnProperty('shelf') ? book.shelf : (index !== -1 ? addedBooks[index].shelf : 'none')

		return (
      <li>
  			<div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={(event) => onChangeShelf(book, event)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors && Object.values(authors).join(', ')}
          </div>
        </div>
      </li>
		)
	}
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book