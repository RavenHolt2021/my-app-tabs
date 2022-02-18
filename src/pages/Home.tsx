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
  IonButtons,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

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
        <IonTitle className="title-bar">
        Lucid Companion
        </IonTitle>
      </IonToolbar>
    </IonHeader>

      <IonContent className="page-background" fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
          <IonButton routerLink="/journalmenu" className="big-button">Journal</IonButton>
          <IonButton routerLink="/alarmmenu" className="big-button">Alarm</IonButton>
          <IonButton routerLink="/lucidmenu" className="big-button">Get Lucid</IonButton>
          <IonButton routerLink="/settingsmenu" className="big-button">Settings</IonButton>
        {/* <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList> */}
        <IonFooter className="footer-content">
          Still working on the
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;