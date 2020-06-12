import React from "react";
import style from "./imageCard.module.scss";

/**
 * General component to show an image
 */
export default class ImageCard extends React.Component {
  render() {
    const { title, imgURL, isFav, year, id } = this.props;
    return (
      <div className={style.card}>
        <div className={style.card__container}>
          <h4 className={style.card__title}>{title}</h4>
        </div>
        <div>
          <button
            key={Math.random().toString()}
            className={`${style.card__favBtn} ${isFav && style.fav}`}
            onClick={async () => await this.props.onFavClick({ isFav, id })}
          >
            {isFav ? (
              <i className={"fas fa-heart"}></i>
            ) : (
              <i className={"far fa-heart"}></i>
            )}
          </button>
          <img src={imgURL} alt="Avatar" className={style.card__img} />
        </div>
        <div className={style.car__year}>{year}</div>
      </div>
    );
  }
}
