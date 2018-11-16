import React, {Component} from 'react';
import logo2 from './burger.jpg';
class Homepage extends Component {
    render() {
        return(
            <React.Fragment>
                <h2>Nikhil Goel</h2>
                <div>Welcome to my website.</div>
                <div>Here you can find some information about my year, major, interests and projects that I've worked on!</div>
                <div>Navigate through the tabs to discover information about me.</div>
                <img src={logo2} alt="Picture of in n out burger, a join I like"></img>
            </React.Fragment>
        )
    }
}

export {Homepage};