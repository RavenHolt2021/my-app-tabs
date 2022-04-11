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
  IonModal,
  useIonModal,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonInput,
  IonLabel,
  IonSegment,
  IonItemGroup,
  IonSegmentButton,
  IonText
} from '@ionic/react';
import './Home.css';

const SettingsMenu: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [confirm2, setConfirm2] = useState<string>();
  const [confirm3, setConfirm3] = useState<string>();
  const [toSave, setToSave] = useState<string>();

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };
  const saveData = () => {
    if (showModal2 && confirm2 == "jellyFish"){

    }
    else if(showModal3 && confirm3 == "Penguin"){

    }
    else if(showModal1){

    }
    setShowModal1(false);
    setToSave("");
    setShowModal2(false);
    setConfirm2("");
    setShowModal3(false);
    setConfirm3("");
    //this.modalContoller.dismiss();
  }
  
  const cancel = () => {
    setShowModal1(false);
    setToSave("");
    setShowModal2(false);
    setConfirm2("");
    setShowModal3(false);
    setConfirm3("");
    //this.modalContoller.dismiss();
  }

  return (
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
        <IonButton onClick={e => setShowModal1(true)} className="big-button">Create Cloud Backup</IonButton>
        <IonButton onClick={e => setShowModal2(true)} className="big-button">Reset All Data</IonButton>
        <IonButton onClick={e => setShowModal3(true)} className="big-button">Clear Bugs</IonButton>


        <IonModal isOpen={showModal1} swipeToClose={true}>
          <IonSelect value={toSave} placeholder="data category to save to cloud" multiple={true} onIonChange={e => setToSave(e.detail.value)}>
            <IonSelectOption>All Data</IonSelectOption>
            <IonSelectOption>Alarm Settings</IonSelectOption>
            <IonSelectOption>Alarm Sounds</IonSelectOption>
            <IonSelectOption>Goals</IonSelectOption>
            <IonSelectOption>Dream Signs</IonSelectOption>
            <IonSelectOption>All Journal Entries</IonSelectOption>
            <IonSelectOption>Some Journal Entries</IonSelectOption>
            <IonSelectOption>Technique Preferences</IonSelectOption>
          </IonSelect>
          <IonItem>
            <IonText>Select the data you would like to save to the cloud and hit save.</IonText>
          </IonItem>
          <IonButton onClick={e => saveData()} className="big-button" >Save</IonButton>
          <IonButton className="big-button" onClick={e => cancel()}>Cancel</IonButton>
        </IonModal>

        <IonModal isOpen={showModal2} swipeToClose={true}>
          <IonSelect value={confirm2} placeholder="Confirmation" multiple={false} onIonChange={e => setConfirm2(e.detail.value)}>
            <IonSelectOption>Gelliephish</IonSelectOption>
            <IonSelectOption>jellyFish</IonSelectOption>
            <IonSelectOption>Jelly Fish</IonSelectOption>
            <IonSelectOption>JalliePhisch</IonSelectOption>
            <IonSelectOption>Jellyfish</IonSelectOption>
          </IonSelect>
          <IonItem>
            <IonText>If you want to RESET ALL OF YOUR DATA, set your confirmation to "jellyFish" and hit Save. This is not Reversible.</IonText>
          </IonItem>
          <IonButton onClick={e => saveData()} className="big-button" >Save</IonButton>
          <IonButton className="big-button" onClick={e => cancel()}>Cancel</IonButton>
        </IonModal>

        <IonModal isOpen={showModal3} swipeToClose={true}>
          <IonSelect value={confirm3} placeholder="Confirmation" multiple={false} onIonChange={e => setConfirm3(e.detail.value)}>
            <IonSelectOption>pEnGuIn</IonSelectOption>
            <IonSelectOption>penGuin</IonSelectOption>
            <IonSelectOption>P3NGU1N</IonSelectOption>
            <IonSelectOption>Penguin</IonSelectOption>
            <IonSelectOption>penguin</IonSelectOption>
          </IonSelect>
          <IonItem>
            <IonText>If you want to clear away any suspicious bugs from this app's data, set your confirmation to "Penguin" and hit Save.</IonText>
          </IonItem>
          <IonButton onClick={e => saveData()} className="big-button" >Save</IonButton>
          <IonButton className="big-button" onClick={e => cancel()}>Cancel</IonButton>
        </IonModal>
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
