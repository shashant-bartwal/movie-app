import styled from 'styled-components';

export const Wrapper = styled.div `
            display: block;
            background: var(--darkGrey);
            width: 25%;
            min-width: 200px;
            height: 60px;
            border-radius: 30px;
            color: var(--white);
            border: 0;
            font-size: var(--fontBig);
            margin: 20px auto;
            transition: all 0.3s;
            outline: none;
            cursor: pointer;
            :hover {
            opacity: 0.8;
            }
`;

export const Content = styled.div `
        display: flex;
        margin: 0;
        justify-content: center;
        align-content: center;
        padding: 12px;
        height: 60%
`;
