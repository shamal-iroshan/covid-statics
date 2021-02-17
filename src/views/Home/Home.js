import React, {Component} from 'react';
import LocalList from "../../component/Local list/LocalList";
import './Home.css';
import GlobalList from "../../component/Global list/GlobalList";
import Footer from "../../component/Footer/Footer";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            update_date_time: null
        }
    }

    componentDidMount() {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical').then((resp => {
            resp.json().then((result) => {
                this.setState({
                    update_date_time: result.data.update_date_time
                });
            })
        }))
    }

    render() {
        return (
            <div>
                <div style={{
                    overflow:'hidden',
                    padding: '0 30px'
                }}>
                    <h1 className={"home-title"}>COVID-19 Situation Report</h1>
                    <h3 className={"updated-time"}>Last updated time : {this.state.update_date_time}</h3>

                    <LocalList/>

                    <GlobalList/>

                    <p className={"disclaimer"}>This might take several minutes to be updated,since Health Promotion
                        Bureau is issuing verified data from reliable sources.</p>
                </div>


                <Footer/>

            </div>
        );
    }
}

export default Home;