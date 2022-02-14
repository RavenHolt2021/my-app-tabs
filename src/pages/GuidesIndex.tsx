import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonPage,
  IonContent,
  IonButton,
  useIonViewWillEnter,
  IonApp,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/react';
import './Home.css';
const GuidesIndex: React.FC = () => {

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
    <IonPage id="get-lucid">
    <IonContent>
        <h1 slot = "title">Get Lucid</h1>
        <h2 slot = "header">Techniques</h2>
        <IonButton routerLink="/" className="big-button" expand="full" fill="outline" color="dark">#1</IonButton>
        <IonButton routerLink="/" className="big-button" expand="full" fill="outline" color="dark">#2</IonButton>
        <IonButton routerLink="/" className="big-button" expand="full" fill="outline" color="dark">#3</IonButton>
        <IonButton routerLink="/" className="big-button" expand="full" fill="outline" color="dark">#4</IonButton>
        <IonButton routerLink="/" className="big-button" expand="full" fill="outline" color="dark">#5</IonButton>
        <IonButton routerLink="/" className="big-button" expand="full" fill="outline" color="dark">#6</IonButton>
      {/* .... etc. Will add more buttons to correspond with number of techniques */}

    </IonContent>
    </IonPage>
);
};

export default GuidesIndex;

