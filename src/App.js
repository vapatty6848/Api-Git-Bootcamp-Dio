import React from 'react';
import Layout from './components/layout';
import Profiles from './components/profiles';
import Repositories from './components/repositories';
import NoSearch from './components/no-search';
import useGithub from './hooks/github.hooks';

function App() {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profiles />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
