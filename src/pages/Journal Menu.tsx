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
            <IonTitle size="large" color="danger">
            Lucid Companion
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton href="#" expand="full" fill="outline" color="dark">New Entries</IonButton>
        <IonButton href="#" expand="full" fill="outline" color="dark">Today's Entries</IonButton>
        <IonButton href="#" expand="full" fill="outline" color="dark">My Dreams</IonButton>
        <IonButton href="#" expand="full" fill="outline" color="dark">Recall Help</IonButton>

        {/* <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList> */}
        <IonFooter>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
