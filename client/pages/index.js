import Header from "../components/header/Header";
import ImageCardList from "../components/imageCardList/ImageCardList";

function Home({ images }) {
  return (
    <div>
      <Header section={"home"}></Header>
      <ImageCardList images={images}></ImageCardList>
    </div>
  );
}

Home.getInitialProps = async ctx => {
  const res = await fetch("http://localhost:8357/api/images");
  const data = await res.json();
  return { images: data.data };
};

export default Home;
