import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Gift extends Component {
    constructor(){
        super();

        this.state = { person: '', present: ''};
    }

    render(){
        return(
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                            className='input-person' 
                            onChange={event => this.setState({ person: event.target.value })}
                        />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Gift;