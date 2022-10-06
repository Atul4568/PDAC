import React from "react";

export const Navi = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>submit
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

