//Libraries
import { useEffect, useState, useContext, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import * as I from 'react-icons/md'
//Components
import MessageItem from '../MessageItem';
//Contexts
import { AuthContext } from '../../contexts/auth'
//Styles
import * as S from './styles'

export default function ChatWindow({data}) {
    const { user } = useContext(AuthContext)

    const body = useRef();
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
    }

    const [isOpenEmoji, setIsOpenEmoji] = useState(false)
    const [message, setMessage] = useState('');
    const [listMessages, setListMessages] = useState([]);
    const [listening, setListening] = useState(false);

    useEffect(() => {
        //It Have ScrollBar
        if (body.current.scrollHeight > body.current.offsetHeight) {
            //Open in the last Message
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [listMessages])

    const handleEmojiClick = (e, emojiObject) => {
        setMessage(message => message + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setIsOpenEmoji(true)
    }

    const handleCloseEmoji = () => {
        setIsOpenEmoji(false)
    }

    const handleSendClick = () => {
        // setListMessages(prevState => [...prevState, ])
    }

    const handleMicClick = () => {
        if (recognition) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setMessage(e.results[0][0].transcript);
            }
            recognition.start();
        }
    }

    return (
        <S.Container>
            <S.Header>
                <S.HeaderInfo>
                    <S.Avatar src={data.image} />
                    <S.Name>{data.title}</S.Name>
                </S.HeaderInfo>

                <S.HeaderButtons>
                    <S.Button>
                        <I.MdSearch
                            size={25}
                            color="#54656f"
                        />
                    </S.Button>

                    <S.Button>
                        <I.MdMoreVert
                            size={25}
                            color="#54656f"
                        />
                    </S.Button>
                </S.HeaderButtons>

            </S.Header>


            <S.Body
                ref={body}
            >
                {listMessages.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user.id}
                    />
                ))}
            </S.Body>

            <S.PickerArea
                isOpen={isOpenEmoji}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                    pickerStyle={{
                        width: '100%',
                        background: 'none',
                    }}
                />
            </S.PickerArea>

            <S.Footer>
                <S.PrevInput>

                    <S.Button
                        onClick={handleCloseEmoji}
                        style={{ width: isOpenEmoji ? "40px" : "0px" }}
                    >
                        <I.MdClose
                            size={25}
                            color="#54656f"
                        />
                    </S.Button>


                    <S.Button onClick={handleOpenEmoji}>
                        <I.MdInsertEmoticon
                            size={25}
                            color={isOpenEmoji ? "#008069" : "#54656f"}
                        />
                    </S.Button>
                    <S.Button>
                        <I.MdAttachFile
                            size={25}
                            color="#54656f"
                        />
                    </S.Button>
                </S.PrevInput>

                <S.InputArea>
                    <S.Input
                        placeholder="Mensagem"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </S.InputArea>

                <S.PosInput>
                    {message ?
                        <S.Button>
                            <I.MdSend
                                size={25}
                                color="#54656f"
                                onClick={handleSendClick}
                            />
                        </S.Button>
                        :
                        <S.Button>
                            <I.MdMic
                                size={25}
                                color={listening ? "#126ECE" : "#54656f"}
                                onClick={handleMicClick}
                            />
                        </S.Button>
                    }
                </S.PosInput>

            </S.Footer>
        </S.Container>
    );
}