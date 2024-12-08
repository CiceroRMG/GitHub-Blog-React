import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .postCardList {
    display: flex;
    gap: 2rem;
    width: 100%;
    flex-wrap: wrap;

    margin-bottom: 6rem;
  }
`

export const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;

  .titleContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h4 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      text-align: right;
      font-size: 0.875rem;
      line-height: 160%;
    }
  }
`

export const SearchPostsInput = styled.input`
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};

    font-family: Nunito;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`
