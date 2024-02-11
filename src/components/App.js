import React, { useState } from "react";
const arr = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. item truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const App = () => {
  const [data, setData] = useState(arr);

  function handleCategories(e) {
    if (e.target.innerText === "All") {
      setData(arr);
      return;
    }
    if (e.target.innerText === "Breakfast") {
      setData(arr.filter((item) => item.category === "breakfast"));
      return;
    }
    if (e.target.innerText === "Lunch") {
      setData(arr.filter((item) => item.category === "lunch"));
      return;
    }
    if (e.target.innerText === "Shakes") {
      setData(arr.filter((item) => item.category === "shakes"));
      return;
    }
  }

  return (
    <div className="main" id="main">
      <h1>Our Menu</h1>
      <nav id="nav">
        <p onClick={handleCategories}>All</p>
        <p id="filter-btn-1" onClick={handleCategories}>
          Breakfast
        </p>
        <p id="filter-btn-2" onClick={handleCategories}>
          Lunch
        </p>
        <p id="filter-btn-3" onClick={handleCategories}>
          Shakes
        </p>
      </nav>
      <div className="content">
        {data.length > 0 &&
          data.map((item) => {
            return item.category == "shakes" ? (
              <div data-test-id="menu-item-shakes" className="card">
                <img src={item.img} alt="No" />
                <div className="left">
                  <span>
                    <h3>{item.title}</h3>
                    <h3 className="price">$ {item.price}</h3>
                  </span>
                  <hr />
                  <span>
                    <p>{item.desc}</p>
                  </span>
                </div>
              </div>
            ) : item.category == "breakfast" ? (
              <div data-test-id="menu-item-breakfast" className="card">
                <img src={item.img} alt="No" />
                <div className="left">
                  <span>
                    <h3>{item.title}</h3>
                    <h3 className="price">$ {item.price}</h3>
                  </span>
                  <hr />
                  <span>
                    <p>{item.desc}</p>
                  </span>
                </div>
              </div>
            ) : item.category == "lunch" ? (
              <div data-test-id="menu-item-lunch" className="card">
                <img src={item.img} alt="No" />
                <div className="left">
                  <span>
                    <h3>{item.title}</h3>
                    <h3 className="price">$ {item.price}</h3>
                  </span>
                  <hr />
                  <span>
                    <p>{item.desc}</p>
                  </span>
                </div>
              </div>
            ) : (
              <div key={item.title} className="card">
                <img src={item.img} alt="No" />
                <div className="left">
                  <span>
                    <h3>{item.title}</h3>
                    <h3 className="price">$ {item.price}</h3>
                  </span>
                  <hr />
                  <span>
                    <p>{item.desc}</p>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
