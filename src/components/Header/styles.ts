import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundHeader.svg'

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 18.5rem;
  background: var(--Base-Profile, #0b1b2b);
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    margin-top: 4rem;

    h3 {
      color: ${(props) => props.theme.blue};
      font-family: Coda;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }
`
