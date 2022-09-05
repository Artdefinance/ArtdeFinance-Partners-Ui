/* eslint-disable react/prop-types */
import React from 'react';
import './Activity.scss';

function Buyer() {
  const data = [
    {
      id: '1',
      name: 'James oreilly kercerind jennifere charly',
      mail: 'Artdefinancegallery@artdefinance.io',
      contact: '+82 10 1234 9382',
      address:
        '3-10, Seolleung-ro 107-gil, Gangnam-gu, Seoul, Repubilc of Korea Gangnam-gu, Republic of Korea',
      date: '22/06/2022 17 : 33 : 55',
      amount: '1,500,000.00',
      busd: '1,500,000.00',
      storage: 'Archived in the gallery vault',
    },
  ];
  return (
    <div className="activity-buyer">
      <div className="activity-buyer__header">
        <p>Buyer</p>
      </div>
      <div className="activity-buyer__content">
        {data.map((items) => (
          <div className="activity-buyer__list" key={items.id}>
            <div className="activity-buyer__item">
              <p className="activity-buyer__title">Name</p>
              <p className="activity-buyer__text">{items.name}</p>
            </div>
            <div className="activity-buyer__item">
              <p className="activity-buyer__title">E-mail</p>
              <p className="activity-buyer__text">{items.mail}</p>
            </div>
            <div className="activity-buyer__item">
              <p className="activity-buyer__title">Contact</p>
              <p className="activity-buyer__text">{items.contact}</p>
            </div>
            <div className="activity-buyer__item">
              <p className="activity-buyer__title">Address</p>
              <p className="activity-buyer__text">{items.address}</p>
            </div>
            <div className="activity-buyer__item">
              <p className="activity-buyer__title">Purchase Date</p>
              <p className="activity-buyer__text">{items.date}</p>
            </div>
            <div className="activity-buyer__item">
              <p className="activity-buyer__title">Purchase Amount</p>
              <p className="activity-buyer__text activity-buyer__text--amount">
                <span className="activity-buyer__wrap">
                  <span className="activity-buyer__box">
                    {items.amount}
                    <span>USD</span>
                  </span>
                  <span className="activity-buyer__box">
                    {items.busd}
                    <span>BUSD</span>
                  </span>
                </span>
              </p>
            </div>
            <div className="activity-buyer__item">
              <p className="activity-buyer__title">Storage/Delivery</p>
              <p className="activity-buyer__text">{items.storage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buyer;
