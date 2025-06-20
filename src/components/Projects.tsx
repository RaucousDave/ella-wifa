import { useState } from "react";
import { gallery } from "./gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = gallery.map((img) => ({
    src: `https://res.cloudinary.com/dfdnwhjln/image/upload/${img.publicId}.jpg`,
  }));

  return (
    <>
      {gallery.map((img, i) => (
        <div
          key={img.id}
          onClick={() => {
            setOpen(true);
            setIndex(i);
          }}
          className="cursor-zoom-in"
        >
          <img
            key={img.id}
            src={`https://res.cloudinary.com/dfdnwhjln/image/upload/${img.publicId}`}
            loading="lazy"
            alt={img.publicId}
            className="rounded-xl w-full object-cover"
          />
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  );
}
