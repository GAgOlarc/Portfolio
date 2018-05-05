import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import classes from './Contact.css';
import ContactForm from './ContactForm/ContactForm.jsx';

class Contact extends Component {
    render() {
        const demoFancyMapStyles = require("react-google-maps/src/components/addons/demoFancyMapStyles.json");

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={9}
                defaultCenter={{ lat: 51.500, lng: -0.0800 }}
                defaultOptions={{
                    gestureHandling: "cooperative",
                    fullscreenControl: false,
                    mapTypeControl: false,
                    styles: demoFancyMapStyles
                }}
            >
                <Marker
                    position={{ lat: 51.6523, lng: -0.0800 }}
                />
            </GoogleMap>
        ));

        return (
            <div className={classes.Content}>
                <div className={classes.ContactText}>
                    <h1>Contact Me</h1>
                    <p>If you have any questions, please don't hesitate to contact using form below.  </p>
                    <ContactForm />
                </div>
                <div className={classes.Map}>
                    <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4vAOOktC8J3C2mtK_qSaISKcNo3Yw_JE&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        );
    }
}

export default Contact;