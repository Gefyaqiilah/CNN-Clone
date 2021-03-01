import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from 'reactstrap'
import imgHeadline from '../../../assets/example-headline.jpeg'

const items = [
  {
    img: imgHeadline,
    src: 'https://youtu.be/g0qL8aTPjBs',
    altText: 'VIDEO: Positif Corona Capai 1.341.314 Jelang Setahun Pandemi',
    caption: 'Nasional 7 Jam yang lalu'
  },
  {
    img: imgHeadline,
    src: 'https://youtu.be/_UVFF8fU2r4',
    altText: 'VIDEO: Positif COVID 19 Harian Turun Menjadi 5.560',
    caption: 'Nasional 7 Jam yang lalu'
  },
  {
    img: imgHeadline,
    src: 'https://youtu.be/omhJ8_12B5M',
    altText: 'VIDEO: Kasus Positif Turun, Kasus Aktif Masih Tinggi',
    caption: 'Nasional 7 Jam yang lalu'
  }
];

const Video = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a href={item.src}><img src={item.img} alt={item.altText} /></a>
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} className="text-left" />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Video;