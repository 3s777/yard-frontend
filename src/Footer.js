import React from "react";
import footerArrow from "./footer-arrow.svg";

export default () => {
  return (
    <footer className="global-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4 className="global-footer-title">ООО «Ярд»</h4>
            <p className="global-footer-info">ОГРН 1175074002531</p>
            <p className="global-footer-info">ИНН 5036165365</p>
            <p className="global-footer-info">+7 (999) 821-14-88</p>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-3">
                <div className="global-footer-nav">
                  <h4 className="global-footer-title">Жилые комплексы</h4>
                  <nav className="global-footer-nav-complexes">
                    <a className="global-footer-nav-link" href="#">
                      ВТБ Арена Парк
                    </a>
                    <a className="global-footer-nav-link" href="#">
                      Садовые кварталы
                    </a>
                    <a className="global-footer-nav-link" href="#">
                      Резиденция Монэ
                    </a>
                    <a className="global-footer-nav-link" href="#">
                      Все ЖК Москвы <img src={footerArrow} alt="" />
                    </a>
                  </nav>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="global-footer-nav">
                  <h4 className="global-footer-title">Компания</h4>
                  <nav className="global-footer-nav-company">
                    <a className="global-footer-nav-link" href="#">Команда</a>
                    <a className="global-footer-nav-link" href="#">
                      О компании
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="global-footer-description">
                  Любая информация, представленная на данном сайте, носит
                  исключительно информационный характер и ни при каких условиях
                  не является публичной офертой, определяемой положениями статьи
                  437 ГК РФ. © ООО «Ярд», 2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
