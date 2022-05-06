import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Message, Dream } from '../data/messages';
import './MessageListItem.css';
import '../pages/Home.css';

interface MessageListItemProps {
  message: Message;
}
interface DreamListItemProps {
  dream: Dream;
}

const toTags = (dream: Dream) => {
  var tagString = "";

  for(const tag in dream.tags){
    tagString = tagString + dream.tags[tag] + ", ";
  }
  return tagString;
};

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {message.fromName}
          <span className="date">
            <IonNote>{message.date}</IonNote>
          </span>
        </h2>
        <h3>{message.subject}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IonLabel>
    </IonItem>
  );
};
function getImage(type: number): string {
  var image = "../assets/icon/empty-star-transparent.png";
  if (type == 0) {
    image = "../assets/icon/empty-star-transparent.png";
  }
  else if (type == 1) {
    image = "../assets/icon/fullstar-transparent.png";
  }
  else {
    image = "../assets/icon/halfstar-transparent.png";
  }
  return image;
}

const DreamListItem: React.FC<DreamListItemProps> = ({ dream }) => {
  return(
    <IonItem routerLink={`dream/${dream.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {dream.title}
          <span className="date">
            <IonNote>{dream.date}</IonNote>
          </span>
        </h2>
        <h2>{dream.dreamText}</h2>
        <p>
          {(toTags(dream))}
          <span className="date">
          <img className="star-button" src={getImage(dream.lucid)}/></span>
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default DreamListItem;
//export default MessageListItem;
