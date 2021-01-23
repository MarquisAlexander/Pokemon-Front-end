import styled from 'styled-components';


export const Container = styled.div`
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: '#000000';
`;

export const Content = styled.div`

    margin-top: 20px;
`;

export const Text = styled.div`
    font-size: 18px;
    text-align: center;
`;

export const Title = styled.div`
    margin: auto;
    text-align: center;
    margin: 10px;

`;

export const TitleText = styled.text`
    font-size: 24px;
`;

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    grid-auto-rows: minmax(10px, auto);
    .card:nth-child(5n + 1) {
    grid-row-end: span 3;
    }

    .card:nth-child(5n + 3) {
    grid-row-end: span 3;
    }

    font-size: 40px;
    list-style: none;
`;

export const Header = styled.div`
    display: flex;
    align-items: center; 

    width: 100%;

`;
export const Image = styled.div`
    padding: 10px 10px;
    z-index:1;
`;

export const Background = styled.div`
    width: 100%;
    height: 10%;
    background-color: #FFCB05;
    position: absolute;
    opacity: 40%;
    z-index:2;
`;

export const Card = styled.div`
    background-color: #FFCB05;
    padding: 5px;
    margin: 0px;

    width: 359px;
    height: 52px;
    left: 460px;
    top: 129px;

    background: #FFCB05;
    border-radius: 10px;
    margin-top: 5px;
    cursor: pointer;

    &:hover {
        background-color: #FFEDA9;
    }
`;

export const Button = styled.button`
    padding: 5px;
    flex-direction: row;
    border: 0;
    background-color: #FFCB05;
    width: 200px;
    height: 60px;
    border-radius: 5px;

    transition: background-color 0.5s;
    &:hover {
        background-color: #FFEDA9;
    }
`;
export const TextButton = styled.text`
    font-size: 18px;
`;

export const ButtonsHotBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px;    
`;
