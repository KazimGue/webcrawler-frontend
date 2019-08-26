import React, {Component} from "react";
import Footer from "./footer";


export default class Preiseingabe extends Component{
    constructor(props){
        super(props)
        this.state = {
            preis2700Liter: '',
            preis4850Liter: '',
            preis6400Liter: '',
            postleitzahl: '',
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        const {preis2700Liter, preis4850Liter, preis6400Liter, postleitzahl,} = this.state
        return (
            <div>
                <div className="container mt-3 mb-3">
                    <h5 className="text-center"> Preiseingabe</h5>
                    <h6 className="text-center  ">Trage die Preise für die jeweilige PLZ ein</h6>

                <form >
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="text">Preis für 2700 Liter</label>
                            <input type="number" class="form-control" id="preis2700Liter" onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="text">Preis für 4800 Liter</label>
                            <input type="number" className="form-control" id="preis2700Liter" onChange={this.myChangeHandler}/>
                    </div>
                    <div class="form-group col-lg-6 col-sm-12">
                        <label for="text">Preis für 6400 Liter</label>
                        <input type="number" className="form-control" id="preis4850Liter" onChange={this.myChangeHandler}/>
                    </div>
                    <div className="form-group col-lg-6 col-sm-12">
                        <label for="text">Postleitzahl</label>
                        <input type="number" className="form-control" id="preis6400Liter" onChange={this.myChangeHandler}/>
                    </div>
                    <div className="form-group col-lg-6 col-sm-12">
                    <button type="submit" class="btn btn-primary" onClick={this.mySubmitHandler}>Daten aktualisieren</button>
                    </div>
                </form>
             </div>
                <Footer/>
            </div>
        );
    }
}
