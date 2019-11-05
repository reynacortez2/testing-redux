import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './setup';
//import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';

/*it('renders without crashing', () => {
  	shallow(<App />);
});

it('renders without crashing', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>);
});

*/
it('renders without crashing', () => {
  	shallow(<App />);
});