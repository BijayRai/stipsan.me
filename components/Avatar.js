import { Component } from 'react'
import styled from 'styled-components'
import getDevicePixelRatio from '../utils/device-pixel-ratio'
import getGravatarUrl from '../utils/gravatar'
import { avatarSize, minAvatarSize } from './dimensions'
import Layer from './Layer'

const StyledImg = styled.img`
  border-radius: 50%;
  min-height: ${minAvatarSize};
  min-width: ${minAvatarSize};
  min-height: var(--avatar-size);
  min-width: var(--avatar-size);
  height: ${avatarSize};
  width: ${avatarSize};
  margin-bottom: 20px;
`

const Wrapper = styled.span`
  display: inline-block;
  border-radius: 50%;
  min-height: ${minAvatarSize};
  min-width: ${minAvatarSize};
  min-height: var(--avatar-size);
  min-width: var(--avatar-size);
  height: ${avatarSize};
  width: ${avatarSize};
  overflow: hidden;
  position: relative;
  background-color: rgba(100, 145, 255, .1);
  /* 3d transform ensures safari clips the picture properly */
  transform: translate3d(0,0,0);

  /* Parallax positioning */
  position: absolute;
  left: 50%;
  top: 16.2vh;
  transform: translate(-50%, -50%);

  & img {
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    position: absolute;
    min-height: ${minAvatarSize};
    min-width: ${minAvatarSize};
    min-height: var(--avatar-size);
    min-width: var(--avatar-size);
    height: ${avatarSize};
    width: ${avatarSize};
    transition: all 200ms ease-out;
    filter: blur(${props => (props.imageDidLoad ? 0 : 8)}px);
    will-change: opacity, filter;
  }

  & img:first-child {
    opacity: ${props => (props.imageDidLoad ? 0 : 1)};
    image-rendering: pixelated;
  }
  & img:last-child {
    opacity: ${props => (props.imageDidLoad ? 1 : 0)};
  }
`

const ratio = getDevicePixelRatio()
// @TODO calculate this dynamically from 7vh
const size = 140

let imageDidLoad = false
const src = getGravatarUrl(size * ratio)
export default class Avatar extends Component {
  componentDidMount() {
    if ('Image' in global) {
      const img = new Image()
      img.onload = () => {
        imageDidLoad = true
        this.forceUpdate()
      }
      img.src = src
    }
  }

  render() {
    return (
      <Layer>
        <Wrapper imageDidLoad={imageDidLoad}>
          <img src={getGravatarUrl(8)} />
          <img src={imageDidLoad ? src : undefined} />
        </Wrapper>
      </Layer>
    )
  }
}
