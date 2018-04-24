import React, { Component } from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "e218cb5069caf5052468876244496c55";

class App extends Component{
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.target.reset();

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const data = await api_call.json();

		console.log(data);
        if(city && country){
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        }
        else{
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter a value"
            });
        }
    
    }

    render() {
        
        return(

            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                <Form getweather={this.getWeather} />
                                <Weather
                                    temperature = {this.state.temperature}
                                    city = {this.state.city}
                                    country = {this.state.country}
                                    humidity = {this.state.humidity}
                                    description = {this.state.description}
                                    error = {this.state.error}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default App;