import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectNews} from "../actions/index";

class UserList extends Component {
    createListItems() {
        
        return this.props.users.map((news) => {
            return (
                <li className="list"
                    key={news.slno}
                    onClick={()=> this.props.selectNews(news)}
                > 
                    <div className="list-title"> {news.title} </div> 
                    <div className="list-thumbnail"><img className="list-thumbs" src={news.image} /></div>
                </li>
                
            );
        });
    }
    
    render() {
        return (
            <div className="left">
            <ul className="homeBreif">
                {this.createListItems()}
            </ul>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        users: state.users
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectNews: selectNews}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);