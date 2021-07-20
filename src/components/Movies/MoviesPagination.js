/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Container from '../ReusableComponents/Container';
import {useContext} from 'react';
import {MovieContext} from '../../Context/MovieContext';

const MoviesPagination = () => {
    const {newPage, currentPage, showPagination} = useContext(MovieContext);

    return(
        <div css={styles} className="moviesPagination">
            {showPagination && (
                <Container>
                    <button 
                    style={{
                        cursor: currentPage !== 1 ? "pointer" : "not-allowed",
                        background: currentPage !== 1 ? "#32de57" : "#303847",
                    }}
                    onClick={() => newPage('previous')}>Prev Page</button>
                    <button onClick={() => newPage('next')}>Next Page</button>
                </Container>
            )} 
        </div>
    );
};

const styles= css`
     width: 100%;
  .container {
    &:nth-child(1) {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        border: none;
        outline: none;
        background: #32de57;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        border-radius: 4px;
        width: 160px;
        padding: 10px 0;
        cursor: pointer;
        user-select: none;
        margin: 0 10px;
        transition: background 500ms ease-in-out;
        &:hover {
          background: #259a3e;
        }
      }
    }
  }
`;

export default MoviesPagination;