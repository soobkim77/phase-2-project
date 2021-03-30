import React from 'react';

class MyUser extends React.Component {

    state={
        
    }

    render(){
        return(
            <div>
                <h4>Reading Wish List</h4>
                <div>
                    {this.props.map()}
                </div>
            </div>
        )
    }
}

export default MyUser