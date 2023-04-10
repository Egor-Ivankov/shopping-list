import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import ShopList from '../shop-list/shop-list';
import ShopListAddForm from '../add-form/shop-list-add-form';

import './app.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [
        {name: 'Тортик', price: 500, increase: false, rise: false, id: 1},
        {name: 'Сыр', price: 300, increase: false, rise: false, id: 2},
        {name: 'Стейк', price: 2000, increase: false, rise: false, id: 3}
      ],
      term: '',
      filter: 'all'
    };
    this.maxId = 4;
  }

  onDelete = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  onAdd = (name, price) => {
    const newItem = {
      name,
      price,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    if(newItem.name.length < 3 || newItem.price.length < 2) {
      alert('Введены неккорректные данные о покупке')
    } else {
        this.setState(({data}) => {
          const newArr = [...data, newItem];
          return {
            data: newArr
          }
        })
    }
  }

  onIncrease = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const old = data[index];
      const newItem= {...old, increase: !old.increase};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      };
    })
  }

  onRise = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const old = data[index];
      const newItem= {...old, rise: !old.rise};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      };
    })
  }

  onSearchEmp = (items, term) => {
    if (term.length < 1) {
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  filterPost = (items, filter) => {
    switch(filter) {
      case 'increase': 
        return items.filter(item => {
          return item.increase === true
        })
      case 'moreThen1000': 
        return items.filter(item => {
          return item.price > 1000
        })
      default:
        return items
    }
  }

  onSearch = (term) => {
    this.setState({term})
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const allShop = this.state.data.length;
    const allIncreased = this.state.data.filter(item => item.increase).length;
    const {data, term, filter} = this.state;
    const onSearchEmpValue = this.filterPost(this.onSearchEmp(data, term), filter);

    return (
      <div className="app">
          <AppInfo  allShop={allShop}
                    allIncreased={allIncreased}/>
  
          <div className="search-panel">
              <SearchPanel onSearch={this.onSearch} />
              <AppFilter  filter={filter}
                          onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <ShopList data={onSearchEmpValue} 
                        onDelete={this.onDelete}
                        onIncrease={this.onIncrease}
                        onRise={this.onRise}/>
          <ShopListAddForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
