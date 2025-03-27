import '../css/index.css'
import image from '../images/construction.png';

const Index = () => {

  return (
    <div className="container">
      <div className="topPortion">
        <img className="topImage" src={image.src} alt="Construction worker image" />
        <div>
          <p className="topText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aperiam, explicabo nihil minus dignissimos odio repellat officia eius ducimus, impedit quos! Dolorem vel magni repellendus neque eveniet voluptates? Perspiciatis, minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi aspernatur delectus a quas natus mollitia voluptatem nulla sit dicta reiciendis quod atque maiores eveniet, magnam, nisi quidem deserunt quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum mollitia labore ad non distinctio iusto. Cumque tempora eligendi necessitatibus voluptatibus nam vero aliquid facere, delectus, laborum perferendis harum fuga accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum architecto ipsum vero, beatae sunt expedita at aperiam deleniti voluptate omnis culpa illo commodi ex ab accusantium. Laborum illum blanditiis suscipit!</p>
        </div>
      </div>
      <div className="middlePortion">
        <div>
          <p className="topText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aperiam, explicabo nihil minus dignissimos odio repellat officia eius ducimus, impedit quos! Dolorem vel magni repellendus neque eveniet voluptates? Perspiciatis, minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi aspernatur delectus a quas natus mollitia voluptatem nulla sit dicta reiciendis quod atque maiores eveniet, magnam, nisi quidem deserunt quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum mollitia labore ad non distinctio iusto. Cumque tempora eligendi necessitatibus voluptatibus nam vero aliquid facere, delectus, laborum perferendis harum fuga accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum architecto ipsum vero, beatae sunt expedita at aperiam deleniti voluptate omnis culpa illo commodi ex ab accusantium. Laborum illum blanditiis suscipit!</p>
        </div>
      </div>
    </div>
  );
}

export default Index;