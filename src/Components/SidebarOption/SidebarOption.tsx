import React from 'react';
import styled from 'styled-components';
import { SvgIconProps } from '@material-ui/core';


interface SidebarProps {
    Icon: (props: SvgIconProps) => JSX.Element;
    title: string,
  }
const SidebarOption:React.FC<SidebarProps> =({ Icon,title })=> {
    console.log(title);
    
    return (
        <SidebarOptionContainer>
            {Icon && <Icon fontSize='small' style={{padding: 10}} />}
        </SidebarOptionContainer>
    )
}

export default SidebarOption;

const SidebarOptionContainer = styled.div``;