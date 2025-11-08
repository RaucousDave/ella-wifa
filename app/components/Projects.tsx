"use client"
import { useState } from "react";
import {gallery} from "@/utils/gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = gallery.map((img) => ({
    src: `${img.image}`,
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
         <Image src={img.image} alt={"graphic image"} width={700} height={700} className={"rounded-lg"}
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
