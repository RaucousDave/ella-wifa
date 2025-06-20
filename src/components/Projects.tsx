import { useState } from "react";
import { Image } from "cloudinary-react";
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
          <Image
            cloudName="dfdnwhjln"
            publicId={img.publicId}
            width="auto"
            crop="scale"
            quality="auto"
            fetchFormat="auto"
            loading="lazy"
            alt={`work-${img.id}`}
            className="rounded-lg shadow-lg w-full"
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
