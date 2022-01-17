import React from 'react';
import useGithub from '../../hooks/github.hooks';
import * as S from './styles';

const Profiles = () => {
    const { githubState } = useGithub();

    return(
      <S.wrapper>
      <S.wrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <S.wrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.wrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.wrapperUserGeneric>
          <S.wrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </S.wrapperUserGeneric>
          <S.wrapperUserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </S.wrapperUserGeneric>
          <S.wrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.wrapperUserGeneric>
        </div>
        <S.wrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.wrapperStatusCount>
      </S.wrapperInfoUser>
    </S.wrapper>
 );
}
export default Profiles;