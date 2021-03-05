import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption
} from 'reactstrap'

const items = [
    {
        img: 'https://akcdn.detik.net.id/visual/2021/03/04/pameran-militer-afganistan-untuk-unjuk-gigi-ke-taliban-6_169.jpeg?w=650&q=90',
        src: 'https://www.cnnindonesia.com/internasional/20210304082017-122-613481/foto-pameran-militer-afghanistan-ajang-unjuk-gigi-ke-taliban',
        altText: 'FOTO: Pameran Militer Afghanistan Ajang Ujung Gigi Ke Taliban',
        caption: 'Internasional 7 Jam yang lalu'
    },
    {
        img: 'https://akcdn.detik.net.id/visual/2021/03/04/demo-penangkapan-pemimpin-oposisi-senegal-rusuh-7_169.jpeg?w=650&q=90',
        src: 'https://www.cnnindonesia.com/internasional/20210304165250-129-613819/foto-demo-penangkapan-pemimpin-oposisi-senegal-rusuh',
        altText: 'FOTO: Demo Penangkapan Pemimpin Oposisi Senegal Rusuh',
        caption: 'Internasional 7 Jam yang lalu'
    },
    {
        img: 'https://akcdn.detik.net.id/visual/2021/03/04/gempa-magnitudo-63-guncang-yunani-5_169.jpeg?w=650&q=90',
        src: 'https://www.cnnindonesia.com/internasional/20210304093944-136-613539/foto-gempa-magnitudo-63-guncang-yunani',
        altText: 'FOTO: Gempa Magnitudo 6,3 Guncang Yunani',
        caption: 'Internasional 7 Jam yang lalu'
    }
];

const Foto = () => {
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

export default Foto
