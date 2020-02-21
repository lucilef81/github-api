import styled from 'styled-components';

const ReposStyled = styled.div`
  .ui.grid {
    margin: 0 auto;
    width: 60%;
  }
  .ui.grid > .row > .column {
    margin-bottom: 1rem;

    .meta + .description {
      word-wrap: break-word;
    }
  }

  .ui.card > .content {
    height: 10rem;
  }
`;

export default ReposStyled;
