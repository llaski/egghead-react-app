import React from 'react';
import { RouteHandler } from 'react-router';
import Search from './Search';

class Main extends React.Component {

	render() {
		return (
			<div>
				<div className="main-container">
					<nav className="navbar navbar-default" role="navigation">
						<div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15 }}>
							<Search />
						</div>
					</nav>
				</div>
				<div className="container">
					<RouteHandler {...this.props} />
				</div>
			</div>
		);
	}

};

export default Main;