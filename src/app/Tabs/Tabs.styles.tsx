import styled from "styled-components";

export const StyledGroupedTabsComponent = styled.div`
    .tabs-container {
        position: absolute;
        color: black;
        z-index: 1;
        margin: auto;
        text-align: center;
        left: 0;
        right: 0;
        margin-left: 0;
        margin-top: 48px;
        cursor: pointer;
        .dropdown-and-icon-container {
            width: max-content;
            margin: auto;
            padding: 4px 16px;
            border: 1px solid transparent;
            .dropdown-container {
                display: inline-block;
                padding-right: 8px;
            }
            .dropdown-icon {
                // filter: invert(99%) sepia(96%) saturate(37%) hue-rotate(32deg) brightness(109%) contrast(100%);
                display: inline-block;
            }
        }
    }
    .dropdown {
        position: relative;
        width: 230px;
        filter: url(#goo);
      
        &__face,
        &__items {
          background-color: #fff;
          padding: 20px;
          border-radius: 25px;
        }
      
        &__face {
          position: relative;
          color: black;
        }

        &__text {
          display: inline-block;
          padding-right: 4px;
        }
      
        &__items {
          margin: 0;
          position: absolute;
          right: 0;
          top: 50%;
          width: 100%;
          list-style: none;
          list-style-type: none;
          display: flex;
          justify-content: space-between;
          visibility: hidden;
          z-index: -1;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.93, 0.88, 0.1, 0.8);
      
          &::before {
            content: "";
            background-color: #fff;
            position: absolute;
            bottom: 100%;
            right: 20%;
            height: 40px;
            width: 20px;
          }
        }
      
        &__arrow {
          border-bottom: 2px solid #000;
          border-right: 2px solid #000;
          position: absolute;
          top: 50%;
          right: 30px;
          width: 10px;
          height: 10px;
          transform: rotate(45deg) translateY(-50%);
          transform-origin: right;
        }
      
        input {
          display: none;
      
          &:checked ~ .dropdown__items {
            top: calc(100% + 35px);
            visibility: visible;
            opacity: 1;
          }
        }
      }
      
`