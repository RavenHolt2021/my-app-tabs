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
  IonBackButton,
  IonFooter,
  IonToolbar,
  useIonViewWillEnter,
  IonButtons
} from '@ionic/react';
import './Home.css';

const Alarm: React.FC = () => {

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
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            {/* <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons> */}
            <IonTitle size="large">
              Alarm Menu
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        
        <IonFooter>
          DO IT AGAIN!
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Alarm;
