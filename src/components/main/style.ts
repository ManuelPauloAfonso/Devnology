import styled from "styled-components";



export const Container = styled.main`

h1{
    font-size: 3rem;
    text-align: center;
    
}
.container-link{
    display: flex;
    justify-content: center;

    form{
        display: flex;
        align-items: center;
        margin-top: 2rem;

        input{
            width: 37.5rem;
            height: 3.625rem;
            border-radius: 8px;
            background: #FFFFFF;
            border: 1px solid #EEEEEE;
        }
        button{
            background: #2D70FD;
            border: 1px solid #2D70FD;
            border-radius: 4px;
            width: 5.25rem;
            height: 2.75rem;
            color: white;
            margin-left: -6rem;
            
        }
    }
}
.item{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10rem;
        margin-top: 2rem;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 4px rgba(0, 23, 71, 0.15);
        width: 50rem;
        height: 6rem;
        border-radius: 9px;
        
        label{
            font-weight: 700;
            font-size: 1.500rem;
        }

    }
    a{
        color: black;
    }
}


`