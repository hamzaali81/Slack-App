import React, { useEffect, useRef} from 'react';
import styled from 'styled-components';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from './../../features/appSlice';
import ChatInput from './../ChatInput/ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from './../../firebase';
import Message from './../Message/Message'; 

interface ChatRef{
    chatRef?: any;
} 

const Chat: React.FC<ChatRef>=()=> {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
       roomId && db
       .collection("rooms")
       .doc(roomId)
    );

    const [roomMessage ,loading] = useCollection(
        roomId && db
       .collection("rooms")
       .doc(roomId)
       .collection("messages")
       .orderBy("timestamp","desc")
    ); 

    useEffect(() => {
        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

    }, [roomId,loading])
     
    
    console.log('roomDetails?.data()',roomDetails?.data());
    console.log(roomMessage);
    
    return (
        <ChatContainer>
           {/* {roomDetails && roomMessage && (

               )} */}
            <Header>
                <HeaderLeft>
                     {/* <h4>#{roomDetails?.data().name}</h4> */}
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
                {roomMessage?.docs.map((doc)=> {
                    const { message, timestamp, user,userImage } = doc.data();
                    console.log(message);
                    
                    return (
                    <Message 
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                        />
                    )
                })}

                <ChatBottom ref={chatRef}/>
            </ChatMessages>

            <ChatInput 
            // channelName={roomDetails?.data().name}
            chatRef={chatRef}
            channelId={roomId}
            />
        </ChatContainer>
    )
}

export default Chat;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

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