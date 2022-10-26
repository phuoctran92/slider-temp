import { ReactNode } from 'react'
import {
  StyledActionContainer,
  StyledCategory,
  StyledCategoryItem,
  StyledContent,
  StyledDescription,
  StyledIcon,
  StyledIconButtonContainer,
  StyledIconButtonLabel,
  StyledIconContainer,
  StyledMovieContainer,
  StyledThumbnail,
  StyledTitle,
} from './index.styled'

type IconButtonProps = {
  icon: ReactNode
  label: string
}

type Movie = {
  isVip: boolean
  thumbnail: string
  title: string
  description?: string
  season: number
  category: string[]
}

type MovieProps = {
  data: Movie
}

function IconButton(props: IconButtonProps) {
  const { icon, label } = props
  return (
    <StyledIconButtonContainer>
      <StyledIconContainer>
        <StyledIcon>{icon}</StyledIcon>
      </StyledIconContainer>
      <StyledIconButtonLabel>{label}</StyledIconButtonLabel>
    </StyledIconButtonContainer>
  )
}
function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 14 14"
    >
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g>
              <g>
                <g>
                  <path
                    d="M0 0H14V14H0z"
                    transform="translate(-313 -805) translate(48 669) translate(0 83) translate(260 48) translate(5 5)"
                  />
                  <path
                    fill="#FFF"
                    d="M11.667 2.333L3.5 7 11.667 11.667z"
                    transform="translate(-313 -805) translate(48 669) translate(0 83) translate(260 48) translate(5 5) matrix(-1 0 0 1 15.167 0)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <path
              d="M0 0H24V24H0z"
              transform="translate(-24 -8) translate(24 8)"
            />
            <path
              fill="#FFF"
              d="M12 4c.552 0 1 .398 1 .889V11h6.111c.456 0 .832.386.883.883L20 12c0 .552-.398 1-.889 1H13v6.111c0 .491-.448.889-1 .889s-1-.398-1-.889V13H4.889c-.456 0-.832-.386-.883-.883L4 12c0-.552.398-1 .889-1h6.11L11 4.889c0-.491.448-.889 1-.889z"
              transform="translate(-24 -8) translate(24 8)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
function ShareIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <path
              d="M0 0H24V24H0z"
              transform="translate(-104 -8) translate(104 8)"
            />
            <path
              fill="#FFF"
              d="M13 3l8 8-8 8v-3.971C9.44 15.235 6.44 16.559 4 19c0-7.59 3-11.579 9-11.968V3z"
              transform="translate(-104 -8) translate(104 8)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
function BorderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <defs>
        <linearGradient
          id="linearGradient-0.1899680525552403"
          x1="0%"
          x2="100%"
          y1="50%"
          y2="50%"
        >
          <stop offset="0%" stop-color="#0C9"></stop>
          <stop offset="100%" stop-color="#09F"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        fill-opacity="0.4"
        fill-rule="evenodd"
        stroke="none"
        stroke-width="1"
      >
        <rect
          width="31"
          height="31"
          x="0.5"
          y="0.5"
          fill="#181D25"
          stroke="url(#linearGradient-0.1899680525552403)"
          rx="15.5"
        ></rect>
      </g>
    </svg>
  )
}

export function MovieCard({ data }: MovieProps) {
  return (
    <StyledMovieContainer>
      <StyledThumbnail backgroundUrl={data.thumbnail} />
      <StyledContent>
        <StyledTitle href="/">{data.title}</StyledTitle>
        <StyledDescription>{data.description}</StyledDescription>
        <StyledCategory>
          <StyledCategoryItem>{`Season ${data.season}`}</StyledCategoryItem>
          {data.category.map((cat, idx) => (
            <StyledCategoryItem className="has-before" key={idx}>
              {cat}
            </StyledCategoryItem>
          ))}
        </StyledCategory>
        <StyledActionContainer>
          <IconButton icon={<PlayIcon />} label="Watch Now" />
          <IconButton icon={<PlusIcon />} label="My List" />
          <IconButton icon={<ShareIcon />} label="Share" />
        </StyledActionContainer>
      </StyledContent>
    </StyledMovieContainer>
  )
}
