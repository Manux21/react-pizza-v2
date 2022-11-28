import React from 'react';

const Categories = () => {

  const [activeIndex, setActiveIndex] = React.useState(0)

  const indexHover = (value) => {
    setActiveIndex(value)
  }
  return (
    <div className="categories">
      <ul>
        <li onClick={() => indexHover(0)} className={activeIndex === 0 ? 'active' : ''}>Все</li>
        <li onClick={() => indexHover(1)} className={activeIndex === 1 ? 'active' : ''}>Мясные</li>
        <li onClick={() => indexHover(2)} className={activeIndex === 2 ? 'active' : ''}>Вегетарианская</li>
        <li onClick={() => indexHover(3)} className={activeIndex === 3 ? 'active' : ''}>Гриль</li>
        <li onClick={() => indexHover(4)} className={activeIndex === 4 ? 'active' : ''}>Острые</li>
        <li onClick={() => indexHover(5)} className={activeIndex === 5 ? 'active' : ''}>Закрытые</li>
      </ul>
    </div>
  );
};

export default Categories;
