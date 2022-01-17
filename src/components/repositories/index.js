import React, { useEffect, useState } from "react";
import RepositoryItem from "../repositoryItem/index";
import * as S from './styles';
import useGithub from "../../hooks/github.hooks";

const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);
  
    useEffect(() => {
      if (githubState.user.login) {
        getUserRepos(githubState.user.login);
        getUserStarred(githubState.user.login);
      }
      setHasUserForSearchrepos(githubState.repositories);
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);
    return(
        <>
        {hasUserForSearchrepos ? (
          <S.wrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
          >
            <S.wrapperTabList>
              <S.wrapperTab>Repositories</S.wrapperTab>
              <S.wrapperTab>Starred</S.wrapperTab>
            </S.wrapperTabList>
            <S.wrapperTabPanel>
              <S.wrapperList>
                {githubState.repositories.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.full_name}
                    fullName={item.full_name}
                  />
                ))}
              </S.wrapperList>
            </S.wrapperTabPanel>
            <S.wrapperTabPanel>
              <S.wrapperList>
                {githubState.starred.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.html_url}
                    fullName={item.full_name}
                  />
                ))}
              </S.wrapperList>
            </S.wrapperTabPanel>
          </S.wrapperTabs>
        ) : (
          <></>
        )}
      </>
    );
};

export default Repositories;
