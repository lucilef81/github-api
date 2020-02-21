import React from 'react';
import { Dimmer, Loader, Grid, Card } from 'semantic-ui-react';
import ReposStyled from './ReposStyled';

const RepoResults = ({ repos, isFetching }) => {
  return (
    <>
      {isFetching ? (
        <Loader active>Loading...</Loader>
      ) : (
        <ReposStyled>
          <Grid columns={3}>
            <Grid.Row>
              {repos.map(repo => (
                <Grid.Column key={repo.owner.id}>
                  <Card
                    as='article'
                    image={repo.owner.avatar_url}
                    header={repo.name}
                    meta={repo.owner.login}
                    description={repo.description}
                    centered
                  />
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </ReposStyled>
      )}
    </>
  );
};

export default RepoResults;
