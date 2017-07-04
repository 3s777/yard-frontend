import React from "react";

export default () => {
  return (
    <main className="complex">
      <div className="container">
        <div className="complex-wrap">
          <div className="complex-header">
            <h1 className="complex-title">Жилой комплекс «Полянка/44»</h1>
            <p className="complex-address">
              Район Якиманка, улица Большая Полянка, дом 44 • 119180
            </p>
          </div>
          <button className="complex-favorite-button">В избранное</button>
        </div>
      </div>
      <div className="complex-gallery">
        <div className="complex-gallery-wrap">
          <img
            className="complex-gallery-photo"
            src={process.env.PUBLIC_URL + "/photo1.jpg"}
            srcSet="/photo1@2x.jpg 2x, /photo1@3x.jpg 3x"
            alt="Photo 1"
          />
          <img
            className="complex-gallery-photo"
            src={process.env.PUBLIC_URL + "/photo2.jpg"}
            srcSet="/photo2@2x.jpg 2x, /photo2@3x.jpg 3x"
            alt="Photo 2"
          />
          <img
            className="complex-gallery-photo"
            src={process.env.PUBLIC_URL + "/photo3.jpg"}
            srcSet="/photo3@2x.jpg 2x, /photo3@3x.jpg 3x"
            alt="Photo 3"
          />
          <img
            className="complex-gallery-photo"
            src={process.env.PUBLIC_URL + "/photo4.jpg"}
            srcSet="/photo4@2x.jpg 2x, /photo4@3x.jpg 3x"
            alt="Photo 4"
          />
          <img
            className="complex-gallery-photo"
            src={process.env.PUBLIC_URL + "/photo5.jpg"}
            srcSet="/photo5@2x.jpg 2x, /photo5@3x.jpg 3x"
            alt="Photo 5"
          />
        </div>
        <div className="complex-gallery-count">
          <div className="container">
            <button className="complex-gallery-count-button">
              41 фотография
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="complex-meta">
          <h2 className="complex-meta-title">
            950<small className="complex-meta-small">предложений</small>
          </h2>
          <h2 className="complex-meta-title">
            John McAslan + Partners<small className="complex-meta-small">
              архитектор
            </small>
          </h2>
          <h2 className="complex-meta-title">
            Группа «ПСН»<small className="complex-meta-small">застройщик</small>
          </h2>
        </div>
        <div className="complex-specifications">
          <h2 className="complex-specifications-title">Характеристики</h2>
          <div className="row">
            <div className="col-lg-4">
              <dl className="complex-specifications-list">
                <dt className="complex-specifications-list-title">
                  Количество квартир:
                </dt>
                <dd className="complex-specifications-list-value">1 503</dd>
                <dt className="complex-specifications-list-title">Статус:</dt>
                <dd className="complex-specifications-list-value">Квартиры</dd>
                <dt className="complex-specifications-list-title">Цены:</dt>
                <dd className="complex-specifications-list-value">
                  от 5.3 до 143.5 млн
                </dd>
              </dl>
            </div>
            <div className="col-lg-4">
              <dl className="complex-specifications-list">
                <dt className="complex-specifications-list-title">
                  Количество квартир:
                </dt>
                <dd className="complex-specifications-list-value">1 503</dd>
                <dt className="complex-specifications-list-title">
                  Количество квартир:
                </dt>
                <dd className="complex-specifications-list-value">1 503</dd>
                <dt className="complex-specifications-list-title">
                  Количество квартир:
                </dt>
                <dd className="complex-specifications-list-value">1 503</dd>
              </dl>
            </div>
            <div className="col-lg-4">
              <dl className="complex-specifications-list">
                <dt className="complex-specifications-list-title">
                  Количество квартир:
                </dt>
                <dd className="complex-specifications-list-value">1 503</dd>
                <dt className="complex-specifications-list-title">
                  Количество квартир:
                </dt>
                <dd className="complex-specifications-list-value">1 503</dd>
                <dt className="complex-specifications-list-title">
                  Количество квартир:
                </dt>
                <dd className="complex-specifications-list-value">1 503</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="compex-description">
          <div className="row">
            <div className="col-lg-2">
              <h2 className="complex-description-title">Описание</h2>
            </div>
            <div className="col-lg-10">
              <article className="complex-description-content">
                <p className="complex-description-content-paragraph">
                  ВТБ Арена Парк — современный квартал в 10 минутах езды от
                  Кремля. Территория разделена на три зоны: жилой район,
                  центральный стадион «Динамо» и большой спортивный парк.
                </p>
                <p className="complex-description-content-paragraph">
                  Жилой район — это 13 корпусов: апартаменты, штаб-квартира
                  «Динамо», отель «Hyatt Regency Moscow» и четыре современных
                  бизнес-центра. На территории — рестораны, спа-комплекс,
                  фитнес-центр, химчистка, аптеки, магазины и отделения банков.
                  В каждом корпусе работает консьерж и круглосуточная охрана.
                  Для жителей оборудованы технические помещения под хранение
                  колясок и велосипедов, комнаты для домашних животных и уютные
                  вестибюли с мягкими креслами для встреч с друзьями и соседями.
                </p>
                <p className="complex-description-content-paragraph">
                  Сердце ВТБ Арена Парк — стадион. Под одной крышей
                  расположились музей, торгово-развлекательный комплекс,
                  подземная парковка для гостей и две крупные спортивные арены.
                  Жизнь квартала сосредоточена в этой зоне: здесь можно сходить
                  на концерт или фестиваль, поболеть за любимую команду и купить
                  новую рубашку в торговом комплексе.
                </p>
                <p className="complex-description-content-paragraph">
                  Тихий жилой район от шумного стадиона отделяет Парк
                  Физкультуры и Отдыха. Здесь каждый найдет занятие: для детей
                  оборудованы игровые зоны, для подростков — спортивные площадки
                  на открытом воздухе, для взрослых — велосипедные дорожки и
                  зоны отдыха, где можно подышать свежим воздухом во время
                  рабочего перерыва.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="complex-structure">
          <h2 className="complex-structure-title">Инфраструктура</h2>
          <div className="row">
            <div className="col-lg-2">
              <div className="complex-structure-item">Бассейн</div>
              <div className="complex-structure-item">Частная школа</div>
            </div>
            <div className="col-lg-2">
              <div className="complex-structure-item">Детский сад</div>
              <div className="complex-structure-item">Частная школа</div>
            </div>
            <div className="col-lg-2">
              <div className="complex-structure-item">Частная школа</div>
              <div className="complex-structure-item">Частная школа</div>
            </div>
            <div className="col-lg-2">
              <div className="complex-structure-item">Бассейн</div>
            </div>
            <div className="col-lg-2">
              <div className="complex-structure-item">Детский сад</div>
            </div>
            <div className="col-lg-2">
              <div className="complex-structure-item">Частная школа</div>
            </div>
          </div>
        </div>
      </div>
      <div className="complex-offers">
        <div className="container">
          <h2 className="complex-offers-title">
            Предложения в ЖК «Полянка/44»
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="complex-offer">
                <h3 className="complex-offer-title">1-комнатные квартиры</h3>
                <dl className="complex-offer-info">
                  <dt className="complex-offer-info-title">Площадь</dt>
                  <dd className="complex-offer-info-value">от 59 до 120 м²</dd>
                </dl>
                <dl className="complex-offer-info">
                  <dt className="complex-offer-info-title">Стоимость</dt>
                  <dd className="complex-offer-info-value">
                    от 20.3 до 84.2 млн руб
                  </dd>
                </dl>
                <button className="complex-offer-info-button">
                  Посмотреть предложения
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="complex-offer">
                <h3 className="complex-offer-title">2-комнатные квартиры</h3>
                <dl className="complex-offer-info">
                  <dt className="complex-offer-info-title">Площадь</dt>
                  <dd className="complex-offer-info-value">от 59 до 120 м²</dd>
                </dl>
                <dl className="complex-offer-info">
                  <dt className="complex-offer-info-title">Стоимость</dt>
                  <dd className="complex-offer-info-value">
                    от 20.3 до 84.2 млн руб
                  </dd>
                </dl>
                <button className="complex-offer-info-button">
                  Посмотреть предложения
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="complex-offer">
                <h3 className="complex-offer-title">3-комнатные квартиры</h3>
                <dl className="complex-offer-info">
                  <dt className="complex-offer-info-title">Площадь</dt>
                  <dd className="complex-offer-info-value">от 59 до 120 м²</dd>
                </dl>
                <dl className="complex-offer-info">
                  <dt className="complex-offer-info-title">Стоимость</dt>
                  <dd className="complex-offer-info-value">
                    от 20.3 до 84.2 млн руб
                  </dd>
                </dl>
                <button className="complex-offer-info-button">
                  Посмотреть предложения
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="complex-place">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="complex-place-name">Якиманка</div>
              <h2 className="complex-place-title">
                Исторический центр Москвы в двух километрах от Кремля
              </h2>
              <a className="complex-place-link" href="#">Гид по Якиманке →</a>
            </div>
            <div className="col-lg-6">
              <img
                className="complex-place-photo"
                src={process.env.PUBLIC_URL + "/polyanka-photo.jpg"}
                srcSet="/polyanka-photo@2x.jpg 2x, /polyanka-photo@3x.jpg 3x"
                alt="Полянка"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="complex-map">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="complex-map-photo"
                src={process.env.PUBLIC_URL + "/map.png"}
                srcSet="/map@2x.png 2x, /map@3x.png 3x"
                alt="Карта местности комплекса"
              />
            </div>
            <div className="col-lg-6">
              <dl className="complex-map-places">
                <dt className="complex-map-places-name">Красный Октябрь</dt>
                <dd className="complex-map-places-value">24 минуты, 6 км</dd>
                <dt className="complex-map-places-name">World className</dt>
                <dd className="complex-map-places-value">2 минуты, 300 м</dd>
                <dt className="complex-map-places-name">
                  Третьяковская галерея
                </dt>
                <dd className="complex-map-places-value">14 минут, 4 км</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
