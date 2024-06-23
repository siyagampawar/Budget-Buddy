import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        // --primary-color: #6675fa;
        // --primary-color2: 'color: rgba(0,0,0,.30)';
        // --primary-color3: 'color: rgba(0,0,0,.30)';
        // --color-green: #42AD00;
        // --color-grey: #aaa;
        // --color-accent: #F56692;
        // --color-delete: #FF0000;
        --primary-color: #3fb8af;
        --primary-color2: rgba(0,0,0,.30);
        --primary-color3: rgba(0,0,0,.30);
        --color-green: #3ebd9e;
        --color-grey: #aaa;
        --color-accent: #42a5f5;
        --color-delete: #ff1744;

    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: #6675fa;
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;