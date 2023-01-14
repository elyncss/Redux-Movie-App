import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = () => {
  const { list } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (imdbID) => {
    dispatch(deleteItem(imdbID));
  };
  return (
    <div className="favorites">
      <input defaultValue="Новый список" className="favorites__name" />
      <ul className="favorites__list">
        {list?.map((item) => (
          <li key={item?.imdbID} className="list-item">
            <Link to="#!">
              {item?.Title} ({item?.Year})
            </Link>
            <button
              type="button"
              className="favorites__delete"
              onClick={() => handleDelete(item.imdbID)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="favorites__save">
        Сохранить список
      </button>
    </div>
  );
};

export default Favorites;
