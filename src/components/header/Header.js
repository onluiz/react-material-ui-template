import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import './Header.css'

class Header extends Component {
    render() {
        return(
            <AppBar
                title="react-material-ui-template"
                iconElementLeft={
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon className="MoreVertIconStyle"/></IconButton>}
                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        >
                        <MenuItem primaryText="Icon Page" />
                        <MenuItem primaryText="Sign In Page"/>
                        <MenuItem primaryText="Sign In Page" />
                    </IconMenu>
                }/>
        );
    }
}

export default Header;