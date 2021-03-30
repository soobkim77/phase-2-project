import React from 'react';

class UserPreferences extends React.Component {

    
    render(){
        console.log(this.props.lists)
        return (
            <div>
                {this.props.lists.map(list => {
                    return (
                    <div>
                        <input type="checkbox" value={list.display_name} name={list.display_name}/> 
                        <label htmlFor={list.display_name}>{list.display_name}</label>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default UserPreferences