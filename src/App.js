import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [
      {
        id: '1',
        imageLinks: {
          thumbnail: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
        },
        shelf: 'currentlyReading',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
      },
      {
        id: '2',
        imageLinks: {
          thumbnail: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
        },
        shelf: 'currentlyReading',
        title: 'Ender\'s Game',
        author: 'Orson Scott Card'
      },
      {
        id: '3',
        imageLinks: {
          thumbnail: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
        },
        shelf: 'wantToRead',
        title: '1776',
        author: 'David McCullough'
      },
      {
        id: '4',
        imageLinks: {
          thumbnail: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'
        },
        shelf: 'wantToRead',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling'
      },
      {
        id: '5',
        imageLinks: {
          thumbnail: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api'
        },
        shelf: 'read',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien'
      },
      {
        id: '6',
        imageLinks: {
          thumbnail: 'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api'
        },
        shelf: 'read',
        title: 'Oh, the Places You\'ll Go!',
        author: 'Seuss'
      },
      {
        id: '7',
        imageLinks: {
          thumbnail: 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'
        },
        shelf: 'read',
        title: 'The Adventures of Tom Sawyer',
        author: 'Mark Twain'
      }
    ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  /*componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }*/

  changeShelf = (book, e) => {
    const newShelf = e.target.value
    const books = this.state.books
    const index = books.findIndex(b => b.id == book.id)

    console.log(book.shelf + ' -> ' + newShelf)

    if (book.shelf !== newShelf) {
      books[index].shelf = newShelf;
    }

    this.setState((currentState) => ({
      books: currentState.books
    }))

    //console.log(this.state.books)
  }

  render() {
    //console.log(this.state.books);

    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
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
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )} />

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title='Currently Reading' books={this.state.books.filter(book => book.shelf == 'currentlyReading')} onChangeShelf={this.changeShelf} />
                <BookShelf title='Want to Read' books={this.state.books.filter(book => book.shelf == 'wantToRead')} onChangeShelf={this.changeShelf} />
                <BookShelf title='Read' books={this.state.books.filter(book => book.shelf == 'read')} onChangeShelf={this.changeShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp