import React from 'react';
import AddNote from './AddNote';
import NotesList from './NotesList';

class Note extends React.Component {

	render() {
		return (
			<div>
				<h3>Notes for {this.props.username}</h3>
				<AddNote username={this.props.username} addNote={this.props.addNote} />
				<br />
				<NotesList notes={this.props.notes} />
			</div>
		);
	}

};

Note.propTypes = {
	username: React.PropTypes.string.isRequired,
	notes: React.PropTypes.array.isRequired,
	addNote: React.PropTypes.func.isRequired
};

export default Note;