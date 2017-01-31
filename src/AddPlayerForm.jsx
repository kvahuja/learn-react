import React, {Component} from 'react';

class AddPlayerForm extends Component {
    render() {
        return (
            <div className="add-player-form">
                <form >
                    <input type="text" value="new player"/>
                    <input type="submit" value="Add Player"/>
                </form>
            </div>

        )
    }
}

export default AddPlayerForm;
