import React, {Component} from 'react';
import axios from 'axios';
import Staff from "../../components/Staff/Staff";
import Spinner from "../../components/UI/Spinner/Spinner";


class StaffList extends Component {

    constructor() {
        super();
        this.state = {
            staffList: [],
            errorMessage: '',
            loading: true
        }
    }

    // get all the profiles from the server and set the state
    componentDidMount() {
        axios.get('http://localhost:3000/staffProfiles.json').then(
            response => {
                console.log(response);
                this.setState({
                    staffList: response.data,
                    loading: false
                })
            }
        ).catch(e => {
            console.log(e);
            if(e.response){
                this.setState({
                    errorMessage: e.response.data.errorMessage,
                    loading: false
                })
            }
            this.setState({
                errorMessage: e.message,
                loading: false
            })

        })
    }

    render() {
        let response = '';
        // if getting response from the server the show spinner
        if(this.state.loading){
            response = <Spinner/>
        } else if(this.state.errorMessage){
            response = (
                <div>
                    {this.state.errorMessage}
                </div>
            )
        } else{
            // if staffList exist then create each Staff and set it's properties
            if(this.state.staffList.length > 0){
               const list   = this.state.staffList.map((staff, index) => {
                   return (
                       <div key={staff.email + index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                       <Staff  photoURL={staff.photoURL} name={staff.name} email={staff.email}
                           department={staff.department}
                    ></Staff>
                       </div>
                           )
                });
               response = (
                   <div className="container">
                   <div className="row">
                       {list}
                   </div>
                   </div>
               );
            }else{
                response = (
                    <div>
                        No staff exist
                    </div>
                )
            }
        }
        return response;
    }

}

export default StaffList;