import styled from 'styled-components'

export const StyledMovieContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`

type ThumbnailProps = {
  readonly backgroundUrl: string
}

export const StyledThumbnail = styled.div<ThumbnailProps>`
  width: 100%;
  height: 125px;
  background-image: url(${(props) => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`

export const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #272e3a;
  padding: 14px;
`
export const StyledTitle = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 1.25;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`

export const StyledDescription = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 1;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  border-left: 3px solid #0c9;
  padding-left: 6px;
`

export const StyledCategory = styled.div`
  display: flex;
`
export const StyledCategoryItem = styled.p`
  color: #d1d7e0;
  font-weight: 500;
  margin: 8px 5px 8px 0px;
  &.has-before:before {
    color: #0c9;
    content: '●';
    margin-right: 6px;
  }
  &.has-before {
    color: #a3afc2;
  }
`
export const StyledActionContainer = styled.div`
  display: flex;
`

export const StyledIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const StyledIconButtonLabel = styled.div`
  color: #d1d7e0;
  font-weight: 500;
  margin-left: 6px;
  ${StyledIconButtonContainer}:hover & {
    color: #fff;
  }
`
export const StyledIconContainer = styled.div`
  position: relative;
  min-width: 32px;
  min-height: 32px;
  border: 1px solid rgb(0, 204, 153);
  border-radius: 50%;
  ${StyledIconButtonContainer}:hover & {
    background-color: #0c9;
    border-color: #0c9;
  }
`

export const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
`
