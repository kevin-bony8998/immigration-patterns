import styled from "styled-components";

export const StyledTabComponent = styled.div`
    .individual-tab-component {
        cursor: pointer;
        --b: 0.1em;   /* the thickness of the line */
        --c: #1095c1; /* the color */
        
        color: #0000;
        padding-block: var(--b);
        background: 
          linear-gradient(var(--c) 50%,#000 0) 0% calc(100% - var(--_p,0%))/100% 200%,
          linear-gradient(var(--c) 0 0) 0% var(--_p,0%)/var(--_p,0%) var(--b) no-repeat;
        -webkit-background-clip: text,padding-box;
                background-clip: text,padding-box;
        transition: .3s var(--_s,0s) linear,background-size .3s calc(.3s - var(--_s,0s));
        &:hover {
            --_p: 100%;
            --_s: .3s;
        }
    }
    .hidden-tab {
        display: none;
    }
`;