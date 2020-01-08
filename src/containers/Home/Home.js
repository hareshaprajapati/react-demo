import React, {Component} from 'react';
import Header from "../../components/Header";
import StaffList from "../StaffList/StaffList";
import classes from './Home.css'

class Home extends Component {

    render() {
        const classNames = [classes.MiddleCenter, classes.Content]
        return (
            <div>
                <Header/>
                <main className={classNames.join(' ')}>
                    <StaffList/>
                </main>

            </div>
        );
    }
}

export default Home;