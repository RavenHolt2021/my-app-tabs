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

const AlarmMenu: React.FC = () => {

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
            <IonTitle className="title-bar">
            Alarms
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton routerLink="/manualalarmmenu" className="big-button" expand="full" fill="outline" color="dark">Manual Alarms</IonButton>
        <IonButton routerLink="/smartalarmmenu" className="big-button" expand="full" fill="outline" color="dark">Smart Alarms</IonButton>
        <IonButton href="#" className="big-button" expand="full" fill="outline" color="dark">View Alarms</IonButton>
        <IonButton routerLink="/alarmsoundsmenu" className="big-button" expand="full" fill="outline" color="dark">Alarm Sounds</IonButton>
        <IonButton routerLink="/pausealarmsmenu" className="big-button" expand="full" fill="outline" color="dark">Stop Alarms</IonButton>
        {/* <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList> */}
        <IonFooter className="footer-content">

        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default AlarmMenu;
