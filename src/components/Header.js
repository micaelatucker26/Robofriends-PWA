import React from "react";

// Class components used to use shouldComponentUpdate() to only re-render a component
// if its props change but we now use React.memo
const Header = React.memo(() => {
    return(
        <h1 className='f1'>RoboFriends</h1>
    );
});

export default Header;