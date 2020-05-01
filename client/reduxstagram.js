import React, { Component } from 'react';
import {render} from 'react-dom';

import css from './styles/style.styl';
import { renderIntoDocument } from 'react-addons-test-utils';

export class reduxstagram extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default reduxstagram

render(<p>Hi</p>, document.getElementById('root'));
