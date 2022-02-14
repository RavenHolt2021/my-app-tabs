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

const ScreenMenu: React.FC = () => {
    
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

return(
    <IonPage id="home-page">
    <IonHeader className="header">
        <IonToolbar>
          <IonButton slot="start">
            <IonBackButton className="back-track"></IonBackButton>
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
        
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>

);
};

export default ScreenMenu;