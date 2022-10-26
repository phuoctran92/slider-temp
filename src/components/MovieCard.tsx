import { ReactNode } from "react";
import styled from "styled-components";
import { IMovie } from "./Slider";


const StyledMovieContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`

interface ThumbnailProps {
  readonly backgroundUrl: string;
}
const StyledThumbnail = styled.div<ThumbnailProps>`
  width: 100%; 
  height: 170px;
  background-image: url(${props => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
`

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #272e3a;
  padding: 14px;
`
const StyledTitle = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 1.25;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  margin-bottom : 8px;

`

const StyledDescription = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 1;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  border-left: 3px solid #0c9;
  padding-left: 6px;
`

const StyledCategory = styled.div`
  display: flex;
`;
const StyledCategoryItem = styled.p`
  color: #d1d7e0;
  font-weight: 500;
  margin: 8px 5px 8px 0px;
  &.has-before:before {
    color: #0c9;
    content: "●";
    margin-right: 6px
  };
  &.has-before {
    color: #a3afc2
  };
`
const StyledActionContainer = styled.div`
  display: flex;
`

export interface IMovieProps {
  data: IMovie
}

export default function MovieCard(props: IMovieProps) {
  const { data } = props
  return (
    <StyledMovieContainer>
      <StyledThumbnail backgroundUrl={data.thumbnail}/>
      <StyledContent >
        <StyledTitle href="/">{data.title}</StyledTitle>
        <StyledDescription>{data.description}</StyledDescription>
        <StyledCategory>
          <StyledCategoryItem>{`Season ${data.season}`}</StyledCategoryItem>
          {
            data.category.map((cat, idx) => (
              <StyledCategoryItem className="has-before" key={idx}>{cat}</StyledCategoryItem>
            ))
          }
        </StyledCategory>
        <StyledActionContainer>
          <IconButton icon={<PlayIcon/>} label="Watch Now"/>
          <IconButton icon={<PlusIcon/>} label="My List"/>
          <IconButton icon={<ShareIcon/>} label="Share"/>
        </StyledActionContainer>
      </StyledContent>
    </StyledMovieContainer>

  )

}


interface IconButtonProps {
  icon: ReactNode;
  label: string;
}

const StyledIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const StyledIconButtonLabel = styled.div`
  color: #d1d7e0;
  font-weight: 500;
  margin-left: 6px;
  ${StyledIconButtonContainer}:hover & {
    color: #fff;
  }
  
`
const StyledIconContainer = styled.div`
  position: relative;
  min-width: 32px;
  min-height: 32px;
  border: 1px solid rgb(0,204,153);
  border-radius: 50%;
  ${StyledIconButtonContainer}:hover & {
    background-color: #0c9;
    border-color: #0c9;
  }
`

const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
`

export function IconButton(props : IconButtonProps) {
  const { icon, label } = props
  return (
    <StyledIconButtonContainer>
      <StyledIconContainer>
        <StyledIcon >
          {icon}
        </StyledIcon>
      </StyledIconContainer>
      
      <StyledIconButtonLabel>{label}</StyledIconButtonLabel>
    </StyledIconButtonContainer>

  )

}

export function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14">
          <g fill="none" fill-rule="evenodd">
                <g>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <path d="M0 0H14V14H0z" transform="translate(-313 -805) translate(48 669) translate(0 83) translate(260 48) translate(5 5)"/>
                                    <path fill="#FFF" d="M11.667 2.333L3.5 7 11.667 11.667z" transform="translate(-313 -805) translate(48 669) translate(0 83) translate(260 48) translate(5 5) matrix(-1 0 0 1 15.167 0)"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
  )
} 
export function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
          <g>
              <g>
                  <path d="M0 0H24V24H0z" transform="translate(-24 -8) translate(24 8)"/>
                  <path fill="#FFF" d="M12 4c.552 0 1 .398 1 .889V11h6.111c.456 0 .832.386.883.883L20 12c0 .552-.398 1-.889 1H13v6.111c0 .491-.448.889-1 .889s-1-.398-1-.889V13H4.889c-.456 0-.832-.386-.883-.883L4 12c0-.552.398-1 .889-1h6.11L11 4.889c0-.491.448-.889 1-.889z" transform="translate(-24 -8) translate(24 8)"/>
              </g>
          </g>
      </g>
  </svg>
  )
}
export function ShareIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
        <g>
            <g>
                <path d="M0 0H24V24H0z" transform="translate(-104 -8) translate(104 8)"/>
                <path fill="#FFF" d="M13 3l8 8-8 8v-3.971C9.44 15.235 6.44 16.559 4 19c0-7.59 3-11.579 9-11.968V3z" transform="translate(-104 -8) translate(104 8)"/>
            </g>
        </g>
    </g>
</svg>
  )
} 

export function BorderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><linearGradient id="linearGradient-0.1899680525552403" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#0C9"></stop><stop offset="100%" stop-color="#09F"></stop></linearGradient></defs><g fill="none" fill-opacity="0.4" fill-rule="evenodd" stroke="none" stroke-width="1"><rect width="31" height="31" x="0.5" y="0.5" fill="#181D25" stroke="url(#linearGradient-0.1899680525552403)" rx="15.5"></rect></g></svg>
  )
} 