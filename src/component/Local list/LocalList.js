import React, {Component} from 'react';
import Card from '../Card/Card';
import './LocalList.css';

class LocalList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            local_new_cases: 0,
            local_active_cases: 0,
            local_total_cases: 0,
            local_recovered: 0,
            local_deaths: 0,
            in_hospitals: 0
        }
    }

    componentDidMount() {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical').then((resp => {
            resp.json().then((result) => {
                this.setState({
                    local_new_cases: result.data.local_new_cases,
                    local_active_cases: result.data.local_active_cases,
                    local_total_cases: result.data.local_total_cases,
                    local_recovered: result.data.local_recovered,
                    local_deaths: result.data.local_deaths,
                    in_hospitals: result.data.local_total_number_of_individuals_in_hospitals

                });
            })
        }))
    }

    formatNumber(value) {
        return value.toLocaleString();
    }

    render() {
        return (
            <div className={"list"}>

                <h3 className={"local-title"}>Local COVID-19 Situation (Sri Lanka)</h3>

                <div className={"local-inner-list"}>

                    <Card
                        color={"#fcb72c"}
                        icon={"fas fa-hospital-alt"}
                        value={this.formatNumber(this.state.local_total_cases)}
                        title={"Total Confirmed Cases"}
                    />

                    <Card
                        color={"#f64a8f"}
                        icon={"fas fa-procedures"}
                        value={this.formatNumber(this.state.local_active_cases)}
                        title={"Active Cases"}
                    />

                    <Card
                        color={"#7052fb"}
                        icon={"fas fa-ambulance"}
                        value={this.formatNumber(this.state.local_new_cases)}
                        title={"Daily New Cases"}
                    />

                    <Card
                        color={"#7052fb"}
                        icon={"fas fa-clinic-medical"}
                        value={this.formatNumber(this.state.in_hospitals)}
                        title={"Individuals currently under investigations in hospitals"}
                    />

                    <Card
                        color={"#50cd8a"}
                        icon={"fas fa-running"}
                        value={this.formatNumber(this.state.local_recovered)}
                        title={"Recovered & Discharged"}
                    />

                    <Card
                        color={"#e3342f"}
                        icon={"fas fa-bed"}
                        value={this.formatNumber(this.state.local_deaths)}
                        title={"Deaths"}
                    />

                </div>
            </div>

        );
    }
}

export default LocalList;