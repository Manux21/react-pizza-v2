import React from 'react'
import axios from 'axios'
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Pagination from "../../components/Pagination/Pagination";
import {SearchContext} from "../../App";
import {setCategoryId, setCurrentPage} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from 'react-redux'


const Home = () => {


  const {categoryId, sort, currentPage} = useSelector(state => state.filter)
  const sortType = sort.sortProperty
  const dispatch = useDispatch();


  const onChangeCategory = (index) => {
    dispatch(setCategoryId(index));
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  const {searchValue} = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [loading, isLoading] = React.useState(true)


  const order = sortType.includes('-') ? 'desc' : 'asc'
  const sortBy = sortType.replace('-', '');
  const category = categoryId > 0 ? `&category=${categoryId}` : ''
  const search = searchValue ? `&search=${searchValue}` : ''


  React.useEffect(() => {
    isLoading(true)


    //заменили на axios
    axios.get(`https://6388a43aa4bb27a7f78d6703.mockapi.io/items?limit=4&page=${currentPage}${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then(res => {
        setItems(res.data);
        isLoading(false);
      })

    // fetch(`https://6388a43aa4bb27a7f78d6703.mockapi.io/items?limit=4&page=${currentPage}${category}&sortBy=${sortBy}&order=${order}${search}`).then(res => {
    //   return res.json()
    // }).then(json => {
    //   setItems(json)
    //   isLoading(false)
    // })
    // window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  return (
    <div className='container'>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory}/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {loading ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>) : items.map(obj => <PizzaBlock
          key={obj.id} {...obj}/>)}

      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  );
};

export default Home;
