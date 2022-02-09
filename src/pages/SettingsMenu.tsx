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

const SettingsMenu: React.FC = () => {

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
            <IonTitle size="large" color="danger">
            Lucid Companion
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent color="success" fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Screen Settings</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Data Settings</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">Passwords</IonButton>
        {/* <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList> */}
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default SettingsMenu;
