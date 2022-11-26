import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #262c61;
    z-index: 1000;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-around;
    
`

export const LogoContainer = styled.div`
    display: block;
    cursor: pointer;
`

export const LogoIcon = styled.img`
    width: 28px;
`

export const Logo = styled.span`
    color: #61e7fb;
    font-size: 2rem;
    font-weight: bold;
`

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Value = styled.div`
    display: flex;
    border: solid 1px #fff;
    border-width: 1.5px;
    border-radius: 30px;
    padding: 5px 20px;
    margin-right: 10px;
    position: relative
`

export const Coins = styled.div`
    color: #fff;
    margin-right: 10px;
    font-size: 1.4rem;
    font-weight: bolder;

`

export const IconCoin = styled.div`
    color: #194E92;
    font-size: 20px;
    margin-right: 20px
`

export const AddButton = styled.div`
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    background-color: #61e7fb;
    border-radius: 50%;
    padding: 9px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    color: #fff;
`

export const Avatar = styled.div`
    flex: 0 0 40px;
    position: relative;
    cursor: pointer;
    
    > img{
        max-width: 40px;
        display: inline-block; 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-feature-settings: 'tnum';
        position: relative;
        overflow: hidden;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        vertical-align: middle;
        line-height: 32px;
        border-radius: 10px;
    }
`