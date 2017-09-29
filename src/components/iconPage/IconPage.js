import React, { Component } from 'react'
import './IconPage.css'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ActionBugReport from 'material-ui/svg-icons/action/bug-report'

class IconPage extends Component {
    render() {
        return(
            <div className="iconPage">

                <h1>Icons</h1>

                <a href="https://material.io/icons">Click here to see the available icons</a>

                <div className="lineBreak" />

                <h5>Import an icon:</h5>
                <div className="lineBreak" />
                <code>import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'</code>
                <br />
                <code>import ActionBugReport from 'material-ui/svg-icons/action/bug-report'</code>

                <div className="lineBreak" />

                <h5>Icon Type:</h5>
                <div className="lineBreak" />
                <code>import MoreVertIcon from 'material-ui/svg-icons/<b className="codeAttention">navigation</b>/more-vert'</code>
                <br />
                <code>import ActionBugReport from 'material-ui/svg-icons/<b className="codeAttention">action</b>/bug-report'</code>

                <div className="lineBreak" />

                <h5>Icon of your choice:</h5>
                <div className="lineBreak" />
                <code>import MoreVertIcon from 'material-ui/svg-icons/navigation/<b className="codeAttention">more-vert'</b></code>
                <br />
                <code>import ActionBugReport from 'material-ui/svg-icons/action/<b className="codeAttention">bug-report'</b></code>

                <h5>Result</h5>
                <MoreVertIcon />
                <ActionBugReport />
            </div>
        );
    }
}

export default IconPage;