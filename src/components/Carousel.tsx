import React, { useState, FC } from "react";

interface CarouselProps {
    images: string[]
}

export const ImageCarousel: FC<CarouselProps> = ({ images }) => {
    const [index, setIndex] = useState(0);

    const visibleCount = 3;
    const maxIndex = Math.max(0, images.length - visibleCount);

    const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
    const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

    if (images.length === 0) {
        return <p style={{ textAlign: "center" }}>Нет изображений для отображения</p>;
    }

    return (
        <div className='carousel-container'>
            <button
                onClick={ prev }
                disabled={ index === 0 }
                className={ index === 0 ? "carousel-btn-disabled" : "carousel-btn-visible" }
            >
                ❮
            </button>
            <div className='carousel-image-container'>
                <div
                    className='carousel-image-container__back'
                    style={{
                        transform: `translateX(-${index * (100 / visibleCount)}%)`,
                        width: `${(images.length * 100) / visibleCount}%`,
                    }}
                >
                    {images.map((src, i) => (
                        <div
                            className='carousel-image-box'
                            key={i}
                            style={{ flex: `0 0 ${100 / images.length}%` }}
                        >
                            <img
                                src={ src }
                                alt={ `slide-${i}` }
                                className='carousel-image'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={ next }
                disabled={ index === maxIndex }
                className={ index === maxIndex ? "carousel-btn-disabled" : "carousel-btn-visible" }
            >
                ❯
            </button>
        </div>
    );
}
