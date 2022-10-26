import styled from 'styled-components'

export const StyledCarousel = styled.div``

export const StyledCarouselContainer = styled.div`
  position: relative;
  height: 125px;
`
export const StyledSlider = styled.div`
  height: 100%;
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: calc(5% / 2);
  padding-right: calc(5% / 2);
`
export const StyledTitle = styled.p`
  font-size: 29px;
  font-weight: 700;
  color: #fff;
`

export const StyledSlide = styled.div`
  display: flex;
`
export const StyledCardContainer = styled.div`
  width: calc(100% / 6);
  margin: 2px;
`

export const StyledDots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  ${StyledCarousel}:hover & {
    opacity: 100;
  }
`
export const StyledDot = styled.button`
  border: none;
  width: 25px;
  height: 4px;
  background: #8595ad45;
  border-radius: 20px;
  margin: 0 3px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.active {
    background: #0c9;
  }
`

export const StyledArrowContainer = styled.div`
  opacity: 0;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  ${StyledCarousel}:hover & {
    opacity: 100;
  }
  
`

export const StyledArrow = styled.div`
  width: calc(5% / 2 - 4px);
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