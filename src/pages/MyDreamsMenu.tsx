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
  IonBackButton
} from '@ionic/react';
import './Home.css';

const MyDreamsMenu: React.FC = () => {

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
            <IonButton slot="start">
              <IonBackButton></IonBackButton>
            </IonButton>
            <IonTitle size="large" color="danger">
            Lucid Companion
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Search</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Dream Signs</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Progress Chart</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Random</IonButton>
        {/* <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList> */}
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default MyDreamsMenu;
