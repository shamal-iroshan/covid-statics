import React, {Component} from 'react';
import Card from "../Card/Card";
import './GlobalList.css';

class GlobalList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            global_new_cases: 0,
            global_total_cases: 0,
            global_deaths: 0,
            global_new_deaths: 0,
            global_recovered: 0,
        }
    }

    componentDidMount() {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical').then((resp => {
            resp.json().then((result) => {
                this.setState({
                    global_new_cases: result.data.global_new_cases,
                    global_total_cases: result.data.global_total_cases,
                    global_deaths: result.data.global_deaths,
                    global_new_deaths: result.data.global_new_deaths,
                    global_recovered: result.data.global_recovered,
                });
            })
        }))
    }

    formatNumber(value) {
        return value.toLocaleString();
    }

    render() {
        return (
            <div className={"global-list"}>

                <h3 className={"global-title"}>Global COVID-19 Situation</h3>

                <div className={"global-inner-list"}>
                    <Card
                        color={"#fcb72c"}
                        icon={"fas fa-hospital-alt"}
                        value={this.formatNumber(this.state.global_total_cases)}
                        title={"Total Confirmed Cases"}
                    />

                    <Card
                        color={"#7052fb"}
                        icon={"fas fa-procedures"}
                        value={this.formatNumber(this.state.global_new_cases)}
                        title={"Daily New Cases"}
                    />

                    <Card
                        color={"#e3342f"}
                        icon={"fas fa-ambulance"}
                        value={this.formatNumber(this.state.global_deaths)}
                        title={"Deaths"}
                    />

                    <Card
                        color={"#f64a8f"}
                        icon={"fas fa-clinic-medical"}
                        value={this.formatNumber(this.state.global_new_deaths)}
                        title={"New Deaths"}
                    />

                    <Card
                        color={"#50cd8a"}
                        icon={"fas fa-running"}
                        value={this.formatNumber(this.state.global_recovered)}
                        title={"Recovered"}
                    />
                </div>
            </div>
        );
    }
}

export default GlobalList;