import React from 'react'
import { connect } from 'react-redux';
import addMovie from "../store/actions/addMovie";
import modifyMovie from "../store/actions/modifyMovie";
import unselectMovie from "../store/actions/unselectMovie";
import PropTypes from "prop-types";
import {CheckIcon, XIcon} from "@heroicons/react/solid"

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      movieId: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("derived state!");
    if (props.item._id !== state.movieId) {
      return {
        input: props.item.name,
        movieId: props.item._id
      }
    }
    return null;
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newMovie = {
      _id: this.props.item._id,
      name: this.state.input
    };
    if (this.state.movieId === undefined) {
      this.props.addMovie(newMovie);
    } else {
      this.props.modifyMovie(this.props.item, newMovie);
    }
    this.handleReset();
  }

  handleReset() {
    console.log("reset");
    this.props.unselectMovie(this.props.item);
    this.setState({
      input: "",
      movieId: ""
    });
  }

  render() {
    return (
      <form className="mt-3 flex justify-center">
        <input type="text" name='movie' className='shadow appearance-none border rounded w-100% py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={this.state.input || ""} onChange={this.handleChange} autoComplete='off' />
        <button type='submit' className='shadow ml-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={this.handleSubmit}>
          <CheckIcon className="h-5 w-5 text-white-500" />
        </button>
        <button type='button' className='shadow ml-2 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={this.handleReset}>
          <XIcon className="h-5 w-5 text-white-500" />
        </button>
      </form>
    );
  }
}

MovieForm.propTypes = {
  addMovie: PropTypes.func.isRequired,
  modifyMovie: PropTypes.func.isRequired,
  unselectMovie: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  item: state.movies.item
});
export default connect(mapStateToProps, { addMovie, modifyMovie, unselectMovie })(MovieForm);