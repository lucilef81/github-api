import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const RepoResults = ({ repos }) => {
  return (
    <>
      {repos.map(repo => (
        <div className='repo'>
          <Card>
            <Image src={repo.owner.avatar_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header>
                {repo.name}
                {repo.owner.login}
              </Card.Header>

              <Card.Description>{repo.description}</Card.Description>
            </Card.Content>
          </Card>
        </div>
      ))}
    </>
  );
};

export default RepoResults;
