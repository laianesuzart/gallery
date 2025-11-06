import { useEffect, useRef, useState } from 'react';
import dinosaur from './assets/dinosaur.png';
import './index.css';

type Image = {
  name: string;
  url: string;
};

const formatCaption = (filename: string) => {
  const [date] = filename.split('_');
  if (date) return `${date.slice(6, 8)}/${date.slice(4, 6)}/${date.slice(0, 4)}`;
  return null;
};

export function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [currentImage, setCurrentImage] = useState<(Image & { index: number }) | null>(null);
  const [error, setError] = useState(false);

  const overlay = useRef<HTMLDivElement | null>(null);
  const animationContainer = useRef<HTMLDivElement | null>(null);

  const onImageClick = (image: Image, index: number) => {
    setCurrentImage({ ...image, index });

    requestAnimationFrame(() => {
      overlay.current?.focus();
    });
  };

  const onNextImage = () => {
    setCurrentImage((prev) => {
      if (!prev) return null;
      const nextIndex = prev.index + 1;
      const nextImage = images[nextIndex];
      return nextImage ? { ...nextImage, index: nextIndex } : prev;
    });
  };

  const onPreviousImage = () => {
    setCurrentImage((prev) => {
      if (!prev) return null;
      const previousIndex = prev.index - 1;
      const previousImage = images[previousIndex];
      return previousImage ? { ...previousImage, index: previousIndex } : prev;
    });
  };

  const onCloseImage = () => {
    setCurrentImage(null);
  };

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  const pauseAnimation = () => {
    if (animationContainer.current) {
      animationContainer.current.classList.toggle('paused-animation');
    }
  };

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch('/api/images');
        const fetchedImages = await res.json();
        setImages(fetchedImages);
      } catch {
        setError(true);
      }
    })();
  }, []);
  return (
    <>
      <div
        ref={animationContainer}
        className={`sakura ${error ? 'hidden' : ''}`}
        aria-hidden="true"
        onClick={pauseAnimation}
      ></div>
      <main>
        <h1 className="title content-layer">Lai's Gallery</h1>
        <div className="container">
          {images.map((image, index) => (
            <figure key={image.name} className="card content-layer">
              <button onClick={() => onImageClick(image, index)} className="card__button">
                <img
                  className="card__image"
                  src={image.url}
                  alt=""
                  loading={index > 5 ? 'lazy' : 'eager'}
                />
              </button>
              <figcaption className="card__caption">{formatCaption(image.name)}</figcaption>
            </figure>
          ))}
        </div>

        <div
          className={`overlay ${currentImage ? '' : 'hidden'}`}
          ref={overlay}
          tabIndex={-1}
          aria-modal="true"
        >
          <button
            onClick={onPreviousImage}
            aria-label="Previous image"
            disabled={currentImage?.index === 0}
            className="overlay__button button--center button--left"
          >
            &lt;
          </button>
          <img src={currentImage?.url} alt="" className="overlay__image" />
          <button
            onClick={onNextImage}
            aria-label="Next image"
            disabled={currentImage?.index === images.length - 1}
            className="overlay__button button--center button--right"
          >
            &gt;
          </button>
          <button onClick={onCloseImage} className="overlay__button button--right button--bottom">
            Close
          </button>
        </div>

        {error && (
          <div className="error-message">
            <img src={dinosaur} alt="" aria-hidden="true" />
            <p>Uh-oh! Looks like something broke. Give the page a quick refresh!</p>
          </div>
        )}
      </main>
      {!error && (
        <footer className="footer content-layer">
          <a
            href="https://github.com/laianesuzart"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com
          </a>

          <button onClick={backToTop} aria-label="Go back to top" className="footer__button">
            &#8593;
          </button>
        </footer>
      )}
    </>
  );
}

export default App;
