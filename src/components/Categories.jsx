import React from 'react';

const Categories = () => {

  const [activeIndex, setActiveIndex] = React.useState(0)

  const indexHover = (value) => {
    setActiveIndex(value)
  }

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div className="categories">
      <ul>
        {
          categories.map((item, index) => (
            <li onClick={() => indexHover(index)} className={activeIndex === index ? 'active' : ''}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Categories;
