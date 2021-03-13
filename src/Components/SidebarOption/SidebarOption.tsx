import React from 'react';
import styled from 'styled-components';
import { SvgIconProps } from '@material-ui/core';
import { db } from './../../firebase';

interface SidebarProps {
    Icon: (props: SvgIconProps) => JSX.Element;
    title: string;
    addChannelOption?: any;
  }
const SidebarOption:React.FC<SidebarProps> =({ Icon,title,addChannelOption })=> {
    console.log(title);
    
    const addChannel = ()=>{
        console.log('Hello');
        
        const channelName = prompt('Please enter the channe name');
        
        if(channelName){
        db.collection('room').add({
            name: channelName
        })
        }

    }
    const selectChannel = ()=> {

    }

    return (
        <SidebarOptionContainer 
        onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{padding: 10}} />}

            {Icon ? (
                <h3>{title}</h3>  
            ) :
            (
                <SidebarOptionChannel>
                    <span>#</span>  {title}
                </SidebarOptionChannel>
            )

            }
        </SidebarOptionContainer>
    )
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;

:hover {
    opacity: 0.9;
    background-color: #340e36;
}

 > h3 {
     font-weight: 500;
 }

 > h3 > span {
     padding: 15px;
 }
`;
const SidebarOptionChannel = styled.div``;