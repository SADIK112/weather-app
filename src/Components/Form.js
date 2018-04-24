import React from "react";

const Form = props => (

    <form onSubmit={props.getweather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <input type="submit" className="btn" value="Get weather"/>
    </form>
);

export default Form;