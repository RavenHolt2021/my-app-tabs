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
    IonBackButton,
    IonButtons,
    IonRange,
    IonIcon,
    IonInput,
    IonItem,
    IonItemDivider,
    IonGrid,
    IonRow,
    IonCol
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
            <IonButtons className="back-track" slot="start">
                <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle className="title-bar">
            Lucid Companion
            </IonTitle>
            <IonButtons className="back-2-home" slot="end">
                <IonButton routerLink="/home">Home</IonButton>
            </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="page-background" fullscreen>
            <IonRefresher slot="fixed" onIonRefresh={refresh}>
            <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            <div>
                <div className="audio-title">
                    <h1>Upload Audio File</h1>
                </div>
                <IonItem>
                <input type="file" accept="audio/*" />
                </IonItem>
                <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonButton className="small-button">Upload</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton href="#"className="small-button">Cancel</IonButton>
                    </IonCol>
                </IonRow>
                </IonGrid>
            </div>
            <IonFooter className="footer-content">
            </IonFooter>
        </IonContent>
        </IonPage>

    );
};

export default ScreenMenu;