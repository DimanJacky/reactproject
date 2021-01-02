import React, {Component, Fragment} from "react";
import {Car} from "../Car";

export class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {
                    modelCar: '',
                    numberCar: ''
                }
            ]
        };

        this.changeCars = this.changeCars.bind(this);
        this.deleteCars = this.deleteCars.bind(this);
    }

    changeCars() {
        console.log('changeCars')
        this.setState((state) => {
            return {
                cars: [
                    {
                        modelCar: 'Toyota',
                        numberCar: '333'
                    }
                ]
            }
        });
    }

    changeCarsOther = () => {
        console.log('changeCarsOther')
        this.setState((state) => {
            return {
                cars: [
                    {
                        modelCar: 'Ford',
                        numberCar: '555'
                    }
                ]
            }
        });
    }

    deleteCars() {
        console.log('deleteCars')
        this.setState((state) => {
            return {
                cars: []
            }
        });
    }

    render() {

        const {cars} = this.state;
        return (
            <>
                <div>
                    Main
                </div>
                <div>
                    {
                        cars.map(car => <Car model={car.modelCar} number={car.numberCar} key={car.numberCar} />)
                    }
                </div>
                <button onClick={this.changeCars}>Изменить машину</button>
                <button onClick={this.changeCarsOther}>Изменить машину еще раз</button>
                <button onClick={this.deleteCars}>Удалить машину</button>
            </>
        );
    }
}
