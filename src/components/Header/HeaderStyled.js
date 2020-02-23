import styled from 'styled-components';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: ${props => (props.isDark ? '#353535' : 'transparent')}
  color: ${props => (props.isDark ? '#fff' : '#000')}

  h1 {
    margin-top: 0;
    font-size: 1.6rem;
  }
`;

export default HeaderStyled;
