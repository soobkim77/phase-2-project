import React from 'react';

class UserPreferences extends React.Component {

    
    render(){
        
        return (
            <div>
                <h1>Choose Your Taste (select 1)</h1>
                <form onSubmit={this.props.submitTaste} onChange={this.props.handleChange}> 
                {this.props.lists.map(list => {
                    return (
                    <div key={list.list_name_encoded}>
                        <input type="radio" value={list.list_name_encoded} id={list.display_name} name="list.display_name" /> 
                        <label htmlFor={list.display_name}>{list.display_name}</label>
                    </div>
                    )
                })}
                <br/>
                <button type="submit" value="Update Taste">Update Taste</button>
                </form>
            </div>
        )
    }
}

export default UserPreferences