import styled from 'styled-components'
import Layer from './Layer'

/* translateZ(-42vh) scale(1.42); */

const Header = styled.h1`
  font-weight: 600;
  letter-spacing: -2px;
  font-size: 3em;
  font-size: 4.687vh;
  color: #222;
  margin-top: 0;
  margin-bottom: 0;

  /* Parallax positioning */
  position: absolute;
  left: 50%;
  top: 59%;
  transform: translate(-50%, -50%);
`

export default () => <Layer>
  <Header>Stian Didriksen</Header>
</Layer>
