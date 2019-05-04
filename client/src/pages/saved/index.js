import React, { Component } from "react";
import API from "../../utils/API";
import CardList from '../../components/CardList';
import Card from 'react-bootstrap/Card';


class Saved extends Component {
        state = {
          valid: false,
          action: 'delete',
          books: [],
        };

    // grab the books from /api/books
    componentDidMount() {
        this.loadBooks();
    }

    // loads all saved books
    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };

    // deletes a book from database
    handleDeleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="body" style={{ marginBottom: "70px" }}>
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <Card className="mt-1 shadow">
                <Card.Header className="cardHeader" style={{ background: "#e9ecef" }}>
                  <h3>
                    Saved Books
                </h3>
                </Card.Header>
                <Card.Body style={{ background: "#fcfcfc" }}>
                  {!this.state.books.length ? (
                    <h2 className="text-center">Save a Book!</h2>
                  ) : (
                      <CardList
                        books={this.state.books}
                        handleDeleteBook={this.handleDeleteBook}
                        action={this.state.action}
                      />
                    )}
                </Card.Body>
              </Card>
            </div>
          </div>



        </div>
      </div>
        );
    }
}

export default Saved;