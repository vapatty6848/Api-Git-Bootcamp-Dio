import React, { useState } from 'react';
import * as S from './styles.js'
import useGithub from '../../hooks/github.hooks'

const Header = () => 
{
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) {
     alert('Pesquisa em branco!!')
    return;
    }
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.wrapper>
    </header>
  );
}

export default Header;