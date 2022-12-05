import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { CardWithEnvelope, Navbar, PointerAnimation } from "./components";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App" style={{ padding: "0 10px" }}>
          {/* <PointerAnimation /> */}
          <Route path="/" exact component={Home} />
          <Route
            path="/:variantId/:functionType/:guestName"
            exact
            render={(renderProps) => {
              const { variantId, guestName } = renderProps.match.params
              return (
                <Home variantId={variantId} guestName={guestName} />
              )
            }}
          />
          <Route
            path="/:variantId/:functionType/:guestName/mehendi"
            exact
            render={(renderProps) => {
              return (
                <CardWithEnvelope
                  buttonText="Mehendi"
                  image="/images/mehendi.png"
                />
              );
            }}
          />
          <Route
            path="/:variantId/:functionType/:guestName/barat"
            exact
            render={(renderProps) => {
              return (
                <CardWithEnvelope
                  buttonText="Barat"
                  image="/images/barat.png"
                />
              );
            }}
          />
          <Route
            path="/:variantId/:functionType/:guestName/walima"
            exact
            render={(renderProps) => {
              return (
                <CardWithEnvelope
                  buttonText="Walima"
                  image="/images/walima.png"
                />
              );
            }}
          />

          <Route
            path="/barat"
            exact
            render={() => {
              return (
                <CardWithEnvelope
                  buttonText="Barat"
                  image="/images/barat.jpg"
                />
              );
            }}
          />

          <Route
            path="/walima"
            exact
            render={() => {
              return (
                <CardWithEnvelope
                  buttonText="Walima"
                  image="/images/walima.jpg"
                />
              );
            }}
          />

          <Navbar />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
