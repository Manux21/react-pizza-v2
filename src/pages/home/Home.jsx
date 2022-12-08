import React from 'react';
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Pagination from "../../components/Pagination/Pagination";
import {SearchContext} from "../../App";

const Home = () => {

  const {searchValue} = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [loading, isLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState({
    name: 'цене', sortProperty: 'price'
  })
  const [currentPage, setCurrentPage] = React.useState(1)

  const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc'
  const sortBy = sortType.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const search = searchValue ? `&search=${searchValue}` : ''

  console.log(searchValue)


  React.useEffect(() => {
    isLoading(true)
    fetch(`https://6388a43aa4bb27a7f78d6703.mockapi.io/items?limit=4&page=${currentPage}${category}&sortBy=${sortBy}&order=${order}${search}`).then(res => {
      return res.json()
    }).then(json => {
      setItems(json)
      isLoading(false)
    })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  return (
    <div className='container'>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)}/>
        <Sort value={sortType} onClickSortType={(obj) => setSortType(obj)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {loading ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>) : items.map(obj => <PizzaBlock
          key={obj.id} {...obj}/>)}

      </div>
      <Pagination onChangePage={number => setCurrentPage(number)}/>
    </div>
  );
};

export default Home;
