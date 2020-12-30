import React, {Component} from "react";

export class Car extends Component {

    static getDerivedStateFromRrops(props, state) {
        console.log('getDerivedStateFromRrops', props, state)
        return props
    }

    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount')
    }

    UNSAFE_componentWillUpdate() {
        console.log('UNSAFE_componentWillUpdate')
    }

    UNSAFE_componentWillReceiveProps() {
        console.log('UNSAFE_componentWillReceiveProps')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return false
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
    }

    render() {
        console.log('render')

        const {model, number} = this.props;
        return (
            <div>
                {`Car ${model} ${number}`}
            </div>
        );
    }
};
