import React from "react";
import Link from "next/link";
import style from "./header.module.scss";

/**
 * General component for header
 */
export default class Header extends React.Component {
  render() {
    const { section } = this.props;
    return (
      <div className={style.headerContainer}>
        <div className={style.buttonContainer}>
          <Link href="/">
            <div
              className={`${style.buttonTabs} ${section === "home" &&
                style.selected}`}
            >
              <i className="fa fa-home"></i>
              <div className={style.buttonTxt}>Home</div>
            </div>
          </Link>
        </div>
        <div className={style.buttonContainer}>
          <Link href="/favourite">
            <div
              className={`${style.buttonTabs} ${section === "like" &&
                style.selected}`}
            >
              <i className="fa fa-heart"></i>
              <div className={style.buttonTxt}>Favourite</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
