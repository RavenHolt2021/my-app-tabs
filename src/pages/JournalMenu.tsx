import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonFooter,
  IonButton,
  IonToolbar,
  useIonViewWillEnter,
  IonBackButton,
  IonButtons,
  IonItem,
  IonLabel
} from '@ionic/react';
import './Home.css';

const JournalMenu: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
    <IonHeader className="header">
        <IonToolbar>
          <IonButtons className="back-track" slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle className="title-bar">
          Lucid Companion
          </IonTitle>
          <IonButtons className="back-2-home" slot="end">
            <IonButton routerLink="/home">Home</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page-background" fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonItem className="page-title">
        <IonLabel className="page-banner">My Journal</IonLabel>
        </IonItem>
        {/* <IonButton href="#" className="back-2-home"></IonButton> */}
        <IonButton routerLink="/newentries" className="big-button">New Entries</IonButton>
        <IonButton routerLink="/todaysentries" className="big-button">Today's Entries</IonButton>
        <IonButton routerLink="/mydreamsmenu" className="big-button">My Dreams</IonButton>
        {/*<IonButton routerLink="/recallhelpmenu" className="big-button">Recall Help</IonButton> Not sure if we'll keep this or not. Was intended to link to the page about recall, but we don't have that set up as an individual page atm*/}
        {/* <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList> */}
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default JournalMenu;
