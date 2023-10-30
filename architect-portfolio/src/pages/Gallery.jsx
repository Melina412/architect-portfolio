import Footer from "../components/Footer";
import Header from "../components/Header";

const Gallery = () => {
  return (
    <>
      <Header />
      <section className="gallery">
        <div className="gallery-headline">
          <h2>Photo</h2>
          <h3>Gallery</h3>
        </div>
        <div className="gallery-pictures">
          <img src="#" alt="placeholder" />

          <img src="/img/gallery/gallery2.png" alt="gallery image" />
          <img src="/img/gallery/gallery3.png" alt="gallery image" />
          <img src="/img/gallery/gallery4.png" alt="gallery image" />
          <img src="/img/gallery/gallery5.png" alt="gallery image" />
          <img src="/img/gallery/gallery6.png" alt="gallery image" />
          <img src="/img/gallery/gallery7.png" alt="gallery image" />
          <img src="/img/gallery/gallery8.png" alt="gallery image" />
          <img src="/img/gallery/gallery9.png" alt="gallery image" />
          <img src="/img/gallery/gallery10.png" alt="gallery image" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
