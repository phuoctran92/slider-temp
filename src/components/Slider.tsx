
import { useState } from "react";
import "./styles.css";
import  styled  from "styled-components"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import MovieCard from "./MovieCard";

export interface IMovie {
  isVip : boolean;
  thumbnail: string;
  title: string;
  description?: string;
  season: number;
  category: string[];
}

const data : IMovie[]  = [
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  },
  {
    isVip : true,
    thumbnail: "https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75",
    title: "Mama Amina",
    description: "Binge-Watch Now",
    season: 1,
    category: ['Family','Comedy'],
  }
  
]
function* chunks(arr : IMovie[], n : number) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

const convertData = [...Array.from(chunks(data, 6))]

const StyledSlideContainer = styled.div`
  position: relative;
  // height: 170px;
`;
const StyledSlider = styled.div`
  height: 100%;
`;
const StyledSlide = styled.div`
  display: flex;
`;
const StyledCardContainer = styled.div`
  width: calc(100% / 6);
  margin: 2px
`;

export default function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: "free-snap",
    slides: {
      origin: 'center',
      perView: 1.05
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
    <>
    {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array.from(Array(instanceRef.current.track.details.slides.length).keys())
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
      <StyledSlideContainer>
        <StyledSlider ref={sliderRef} className="keen-slider">
          {
            convertData.map((slide, slideIdx) => (
              <StyledSlide className="keen-slider__slide" key={slideIdx}>
                {
                  slide.map((movie, movieIdx) => (
                    <StyledCardContainer key={movieIdx}>
                      <MovieCard data={movie} />
                    </StyledCardContainer>
                  ))
                }
              </StyledSlide>
            ))
          }
        </StyledSlider>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </StyledSlideContainer>
      
    </>
  );
}


function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}