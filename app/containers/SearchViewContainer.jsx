import React, { PropTypes } from 'react';

var styles = {
    doNotDisplay: {
     display: 'none'
    }
}

class SearchViewContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    handleChange (e) {
        this.setState ({
            search: e.target.value
        })
    }
    handleSubmit () {
        console.log(this.state.search);
    }
    render () {
        return (
            <form>
                <input
                    type='text'
                    onChange={(e) => this.handleChange(e)}/>
                <input type="submit"
                    onClick={(e) => this.handleSubmit()}
                    style={styles.doNotDisplay}/>
            </form>
        )
    }
}

export default SearchViewContainer;


//those buttons are 'FatButton'
//vendors are LongButton
//autcomplete
//prefix queries to db