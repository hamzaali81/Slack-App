import React, {forwardRef}  from 'react';
import styled from 'styled-components';
import SidebarOption from '../SidebarOption/SidebarOption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

// import {Icons,Action, MaterialTableProps} from 'material-table';
// import { SvgIconProps } from '@material-ui/core/SvgIcon';

// const tableIcons: Icons = {
//     InsertComment: () => <InsertCommentIcon />,
//     Drafts: () => <DraftsIcon />,
//     BookmarkBorder: () => <BookmarkBorderIcon />,
//     BookmarkBorder: () => <BookmarkBorderIcon />,
//     PeopleAlt: () => <PeopleAltIcon />,
//     Apps: () => <AppsIcon />,
//     FileCopy: () => <FileCopyIcon />,
//     ExpandLess: () => <ExpandLessIcon />,
    
//   };
//   const icons = {
//     InsertComment: props => <InsertCommentIcon {...props} />,
   
//   }
  
const SideBar: React.FC =() => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Slack fan</h2>
                      <h3>
                <FiberManualRecordIcon />
                slack fan club
                      </h3>
                </SidebarInfo>
                     <CreateIcon />
                </SidebarHeader>    


               
                <SidebarOption Icon={InsertCommentIcon} title="Threaads" /> 
                <SidebarOption Icon={DraftsIcon} title="Mentions & reactions"/>
                <SidebarOption Icon={BookmarkBorderIcon} title="Saved items" />
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={FileCopyIcon} title="File browser" />
                <SidebarOption Icon={ExpandLessIcon} title="Show less" />
                <hr/>
                <SidebarOption Icon={ExpandMoreIcon} title="Channel" />
                <hr/>
                <SidebarOption Icon={AddIcon} addChannelOption  title="Add Channel" />
                
            </SidebarContainer>
    )
}

export default SideBar;

const SidebarContainer = styled.div`
color: white;
background-color: var(--slack-color);
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;

 >hr {
     margin-top: 10px;
     margin-bottom: 10px;
     border: 1px solid #49274b;
 }
`;

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;

> .MuiSvgIcon--root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`;

const SidebarInfo = styled.div`
flex: 1;
> h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}

>  h3 {
  display: flex; 
  font-size: 13px;
  font-weight: 400;
  align-items: center; 
}

> h3 > .MuiSvgIcon--root{
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`;