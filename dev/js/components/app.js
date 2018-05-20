import React from 'react';
import UserList from '../containers/user-list';
import NewsDetail from '../containers/news-detail';
require('../../scss/style.scss');
const App = () => (
    <div>
        <h2 className="center">Dainik Bhaskar</h2>
            <UserList />
        {/* <hr /> */}
        {/* <h2> Dainik Bhaskar </h2> */}
            <NewsDetail />
    </div>
);


export default App;