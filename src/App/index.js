import React from 'react';
import Header from '../Header';
import ExpeditionList from '../ExpeditionList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      basketItems: [],
    };
  }

  componentDidMount() {
    //const URL = "https://sdiscount-api.herokuapp.com/products";
    const URL = 'https://localhost:44311/api/MiniExcursion';
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const products = data.map(product => ({
          libelleMiniExcursion: product.libelle,
          nombresPlaces: product.nbPlace,
          reference: product.id,
        }));

        this.setState({
          products,
        });
      });
  }

  render() {
    return (
      <div>
        <Header title="Loclandes" />
        <ExpeditionList products={this.state.products} />
      </div>
    );
  }
}

export default App;
