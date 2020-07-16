import React from 'react';
import './App.css';
import Header from './Header';
import Instructions from './Instructions';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <nav>
           <ul>
              <li>
                <Link to ='/'>Accueil</Link>
              </li>
              <li>
                <Link to ='/Infos'>Infos</Link>
              </li>
              <li>
                <Link to ='/Formulaires'>Formulaires</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Infos">
              <Infos />
            </Route>
            <Route path="/Formulaires">
              <Formulaires />
            </Route>
            <Route path="/">
              <Accueil />
            </Route>
          </Switch>
        </div>
      </Router>      
      <Instructions/>
    </div>
  );
}

function Accueil() {
  return (Accueil);
}

function Infos(props) {
  return (Infos)
}

class Formulaires extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Nom: "",
      Prénom: "",
      Adresse: ""
    };
  }
    valider(event) {
      alert("Nom: " + this.state.Nom);
      alert("Prénom: " + this.state.Prénom);
      alert("Adresse: " + this.state.Adresse);
      event.preventDefault();
    }

    change_value_nom(event) {
      this.setState({
        Nom: event.target.value,
      });
    }

    change_value_prénom(event) {
      this.setState({
        Prénom: event.target.value,
      });
    }

    change_value_adresse(event) {
      this.setState({
        Adresse: event.target.value,
      });
    }

    render() {
      return (
        <form onSubmit={event => this.valider(event)}>
          <label>
            Nom:
            <input
            type="text"
            onChange={event => this.change_value_nom(event)}
            nomG={this.state.nom}
            value={this.state.Nom}
          />
          </label>
          <label>
            Prénom:
            <input
            type="text"
            onChange={event => this.change_value_prénom(event)}
            prénomG={this.state.Prénom}
            value={this.state.Prénom}
            />
          </label>
          <label>
            Adresse:
            <input
            type="text"
            onChange={event => this.change_value_adresse(event)}
            adresseG={this.state.Adresse}
            value={this.state.Adresse}
          />
          </label>
          <input type="submit" value="Valider"/>
        </form>
      )
    }
}

export default App;
