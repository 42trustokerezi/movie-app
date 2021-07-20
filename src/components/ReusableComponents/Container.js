/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Container = ({ children }) => {
    return(
        <div css={styles} className="container">
        {children}
    </div>
    );
};

const styles = css`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
`;

export default Container;