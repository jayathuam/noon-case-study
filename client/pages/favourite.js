import Header from "../components/header/Header";
import ImageCardList from "../components/imageCardList/ImageCardList";

function Favourite({ images }) {
  return (
    <div>
      <Header section={"like"}></Header>
      <ImageCardList images={images} isFavourite></ImageCardList>
    </div>
  );
}

Favourite.getInitialProps = async ctx => {
  const res = await fetch("http://localhost:8357/api/favImages");
  const data = await res.json();
  return { images: data.data };
};

export default Favourite;
