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
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Lucid Companion</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      {/* Keep this how it is for now. Speak with teacher if need be! */}

      <IonContent color="success" fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="title-bar">
            Lucid Companion
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/journal" className="big-button" expand="full" fill="outline" color="dark">Journal</IonButton>
        <IonButton routerLink="/alarm" className="big-button" expand="full" fill="outline" color="dark">Alarm</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Get Lucid</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Settings</IonButton>
        <IonFooter className="footer-content">
          Still working on the
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
