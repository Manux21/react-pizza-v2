import React from 'react';
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";

const Home = () => {

  const [items, setItems] = React.useState([])
  const [loading, isLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://6388a43aa4bb27a7f78d6703.mockapi.io/items').then(res => {
      return res.json()
    }).then(json => {
      setItems(json)
      setTimeout(() => {
        isLoading(false)
      }, 1000)
    })
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='container'>
      <div className="content__top">
        <Categories/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {/*{loading ? items.map((_, index) => <Skeleton key={index}/>) : items.map(obj => <PizzaBlock*/}
        {/*  key={obj.id} {...obj}/>)}*/}


        {loading ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>) : items.map(obj => <PizzaBlock
          key={obj.id} {...obj}/>)}

      </div>
    </div>
  );
};

export default Home;
