import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import {
  StyledArrowContainer,
  StyledCardContainer,
  StyledCarousel,
  StyledCarouselContainer,
  StyledDot,
  StyledDots,
  StyledHeader,
  StyledSlide,
  StyledSlider,
  StyledTitle,
} from './index.styled'
import { MovieCard } from './movieCard'

export type Movie = {
  isVip: boolean
  thumbnail: string
  title: string
  description?: string
  season: number
  category: string[]
}

const data = new Array(20).fill({
  isVip: true,
  thumbnail:
    'https://shahid.mbc.net/_next/image?url=https%3A%2F%2Fshahid.mbc.net%2FmediaObject%2F2022%2FMar%2FAmjad%2FJuly%2FThump_Mama_Amina_en%2Foriginal%2FThump_Mama_Amina_en.jpg%3Fheight%3D253%26width%3D450%26croppingPoint%3D%26version%3D1%26type%3Dwebp&w=1440&q=75',
  title: 'Mama Amina',
  description: 'Binge-Watch Now',
  season: 1,
  category: ['Family', 'Comedy'],
})

function* chunks(arr: Movie[], n: number) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n)
  }
}

const convertData = [...Array.from(chunks(data, 6))]

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loadedAll, setLoadedAll] = useState(false)
  const [loaded, setLoaded] = useState<boolean[]>([])

  useEffect(() => {
    const newLoadedComing = Array(6).fill(true)
    const new_loaded = [...loaded, ...newLoadedComing]
    setTimeout(() => {
      setLoaded(new_loaded)
    }, 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide])
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 1.05,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoadedAll(true)
    },
  })

  return (
    <StyledCarousel>
      <StyledHeader>
        <StyledTitle>Shahid Originals</StyledTitle>
        {loadedAll && instanceRef.current && (
          <StyledDots className="dots">
            {[
              ...Array.from(
                Array(instanceRef.current.track.details.slides.length).keys()
              ),
            ].map((idx) => {
              return (
                <StyledDot
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={currentSlide === idx ? 'active' : ''}
                ></StyledDot>
              )
            })}
          </StyledDots>
        )}
      </StyledHeader>

      <StyledCarouselContainer>
        <StyledSlider ref={sliderRef} className="keen-slider">
          {convertData.map((slide, slideIdx) => (
            <StyledSlide className="keen-slider__slide" key={slideIdx}>
              {slide.map((movie, movieIdx) => (
                <StyledCardContainer key={movieIdx}>
                  <MovieCard data={movie} loaded={loaded[slideIdx*6 + movieIdx]}/>
                </StyledCardContainer>
              ))}
            </StyledSlide>
          ))}
        </StyledSlider>
        {loadedAll && instanceRef.current && (
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
      </StyledCarouselContainer>
    </StyledCarousel>
  )
}

interface ArrowProps {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}

const StyledArrow = styled.div`
  width: calc(5% / 2 - 5px);
  background: rgba(24, 29, 37, 0.6);
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
    display: none;
  }
  &.arrow--left {
    left: 0px;
    justify-content: flex-start;
  }
  &.arrow--right {
    left: auto;
    right: 0px;
    justify-content: flex-end;
  }
  & svg {
    width: 25px;
  }
`

function Arrow(props: ArrowProps) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <StyledArrow
      onClick={props.onClick}
      className={`${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </StyledArrow>
  )
}
