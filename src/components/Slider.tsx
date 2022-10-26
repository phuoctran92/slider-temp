
import { useState } from "react";
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
const StyledSliderContainer = styled.div``

const StyledSlideContainer = styled.div`
  position: relative;
  height: 170px;
`;
const StyledSlider = styled.div`
  height: 100%;
`;

const StyledSliderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: calc(5% / 2);
  padding-right: calc(5% / 2);

`
const StyledSliderTitle = styled.p`
  font-size: 29px;
  font-weight: 700;
  color: #fff
`
const StyledSlide = styled.div`
  display: flex;
`;
const StyledCardContainer = styled.div`
  width: calc(100% / 6);
  margin: 2px;
`;

const StyledDots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s;
   -webkit-transition: all 0.3s;
  ${StyledSliderContainer}:hover & {
    opacity: 100;
  }
`
const StyledDot = styled.button`
  border: none;
  width: 25px;
  height: 4px;
  background: #8595ad45;
  border-radius: 20px;
  margin: 0 3px;
  cursor: pointer;
  &:focus {
    outline: none;
  };
  &.active {
    background: #0c9;
  }
`

const StyledArrowContainer = styled.div`
  opacity: 0;
  transition: all 0.3s;
   -webkit-transition: all 0.3s;
  ${StyledSliderContainer}:hover & {
    opacity: 100;
  }
`

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
    <StyledSliderContainer>
      <StyledSliderHeader>
        <StyledSliderTitle>
          Shahid Originals
        </StyledSliderTitle>
        {loaded && instanceRef.current && (
          <StyledDots className="dots">
            {[
              ...Array.from(Array(instanceRef.current.track.details.slides.length).keys())
            ].map((idx) => {
              return (
                <StyledDot
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={(currentSlide === idx ? " active" : "")}
                ></StyledDot>
              );
            })}
          </StyledDots>
        )}
      </StyledSliderHeader>
    
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
          <StyledArrowContainer>
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
          </StyledArrowContainer>
        )}
      </StyledSlideContainer>
      
    </StyledSliderContainer>
  );
}


interface ArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}

const StyledArrow = styled.div`
  width: calc(5% / 2 - 5px);
  background: rgba(24,29,37,.6);
  height: 100%;
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
  &.arrow--disabled {
    display: none
  };
  &.arrow--left {
    left: 0px;
    justify-content: flex-start;
  };
  &.arrow--right {
    left: auto;
    right: 0px;
    justify-content: flex-end;
  };
  & svg {
    width: 25px
  }
`

function Arrow(props: ArrowProps) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <StyledArrow 
      onClick={props.onClick}
      className={`${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      >
      <svg
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
    </StyledArrow>
  );
}
