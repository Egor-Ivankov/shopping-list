import { Component } from 'react';

import './shop-list-add-form.css';

class ShopListAddForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: ''
        }
    }

    onAdd = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.price); 
        this.setState({
            name: '',
            price: ''
        })
    }

    render() {
        const {name, price} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавить новую покупку</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Например: Хлеб" 
                        name="name"
                        value={name}
                        onInput={this.onAdd}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Денежные затраты" 
                        name="price"
                        value={price}
                        onInput={this.onAdd}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default ShopListAddForm;