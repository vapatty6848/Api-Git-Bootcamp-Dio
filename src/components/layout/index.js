import React from "react";
import Header from "../header";
import * as S from './styles';

const Layout = ({ children }) => {
    return(
        <S.wrapperLayout>
           <Header />
           {/* parte dinâmica */}
           {children}
        </S.wrapperLayout>
    )
};

export default Layout;