import React from 'react';
import styled from 'styled-components';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from './../../features/appSlice';
import ChatInput from './../ChatInput/ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from './../../firebase';



function Chat() {
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
       roomId && db
       .collection("rooms")
       .doc(roomId)
    );

    const [roomMessage] = useCollection(
        roomId && db
       .collection("rooms")
       .doc(roomId)
       .collection("messages")
       .orderBy("timestamp","desc")
    ); 


    
    console.log(roomDetails?.data());
    console.log(roomMessage);
    
    return (
        <ChatContainer>
           
            <Header>
                <HeaderLeft>
                     <h4>#{roomDetails?.data().name}</h4>
                </HeaderLeft>
                <StarOutlineIcon />
                <HeaderRight>
                    <p>
                       <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>
            </Header>

            <ChatMessages>
                {/* list out the message */}
            </ChatMessages>

            <ChatInput 
            channelName={roomDetails.?.data().name}
            channelId={roomId}
            />
        </ChatContainer>
    )
}

export default Chat;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
 > h4{
     display: flex;
     text-align: lowercase;
     margin-right: 10px;
 }

 > h4 .MuiSvgIcon-root{
     margin-left: 10px;
     font-size: 18px;
 }
`;
const HeaderRight = styled.div`
> p {
    display: flex;
    align-items: center;
    font-size: 14px;
}

> p > .MuiSvgIcon-root{
    margin-left: 5px !important;
    font-size: 16px;
}
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;


const ChatMessages = styled.div``;