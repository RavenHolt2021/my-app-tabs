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

const LucidMenu: React.FC = () => {

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
          <IonButton slot="start">
            <IonBackButton></IonBackButton>
          </IonButton>
          <IonTitle className="title-bar">
          Lucid Companion
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page-background" fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">My Techniques</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Day Practices</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Night Practices</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Other Guides</IonButton>
        {/* <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList> */}
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default LucidMenu;
