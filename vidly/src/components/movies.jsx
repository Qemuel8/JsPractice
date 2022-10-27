import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";
import { deleteMovie } from "./fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: [...getMovies()],
    pageSize: 4,
  };

  handleDelete = (movie) => {
    this.setState({ movies: [...deleteMovie(movie)] });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log(page);
  };

  renderMovies() {
    const { length: count } = this.state.movies;
    return (
      <div>
        <h3 className="m-4">showing {count} movies in database</h3>
        <table className="table m-4">
          <thead>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
            <th />
          </thead>
          {this.state.movies.map((movie) => (
            <tbody>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onClick={() => this.handleLike(movie)}
                />
              </td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tbody>
          ))}
        </table>
        <Pagination
          itemsCount={count}
          pageSize={10}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
  formatList;
  render() {
    return (
      <div>
        {this.state.movies.length === 0 && "There are no movies!"}
        {this.state.movies.length !== 0 && this.renderMovies()}
      </div>
    );
  }
}

export default Movies;
