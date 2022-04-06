import MessageListItem from '../components/MessageListItem';
import { useState, useRef } from 'react';
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
    IonSegment,
    IonItemGroup,
    IonSegmentButton,
    IonLabel,
    IonItem,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonInput,
    useIonModal
} from '@ionic/react';
import './Home.css';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';

const ScreenMenu: React.FC = () => {
    
  const [messages, setMessages] = useState<Message[]>([]);
  const [signs, setSigns] = useState<string>();
  const [type, setType] = useState<Number>();
  const [sign, setSign] = useState<string>();
  const [showModal, setShowModal] = useState(true);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };
  const selector = useRef(null);
  
  const setVisible = (selectedValue: string, compareValue: string): boolean => {
    let val = true;
    if(selectedValue == compareValue){
      val = false;
    }
    return val;
  };
  const saveData = () => {
    setShowModal(false);
    //this.modalContoller.dismiss();
  }


  const Body: React.FC<{
    count: number;
    onDismiss:()=> void;
    onIncrement: () => void;
  }> = ({count, onDismiss, onIncrement}) => (
    <div>
      count: {count}
      <IonButton  expand="block" onClick={() => onIncrement()}>
        Increment Count
      </IonButton>
      <IonButton expand="block" onClick={() => onDismiss()}>
        Close
      </IonButton>
    </div>
  );

    const handleDismiss = () => {
      dismiss();
    };

    const [present,dismiss] = useIonModal(Body, { 
      onDismiss: handleDismiss,
    });

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
        
        <IonButton id="trigger" className="big-button">Add Dream Sign</IonButton>

        <IonModal isOpen={showModal} trigger="trigger" swipeToClose={true}>
          <IonSelect value={type} placeholder="Sign Type" multiple={false} onIonChange={e => setType(e.detail.value)}>
            <IonSelectOption>Recurring</IonSelectOption>
            <IonSelectOption>Context</IonSelectOption>
            <IonSelectOption>Impossible</IonSelectOption>
            <IonSelectOption>Behavioral</IonSelectOption>
          </IonSelect>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Sign" value={sign} onIonChange={e => setSign(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton onClick={e => saveData()} id="trigger" className="big-button" >Save</IonButton>
          <IonButton className="big-button" id="trigger" onClick={e => setShowModal(false)}>Cancel</IonButton>
        </IonModal>

        <IonItemGroup class="tabs">
        <IonSegment ref={selector} scrollable = {true} onIonChange={e => setSigns(e.detail.value)} value={signs}>
          <IonSegmentButton value='1' >
            <IonLabel>Recurring</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='2'>
            <IonLabel>Context</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='3'>
            <IonLabel>Impossible</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='4'>
            <IonLabel>Behavioral</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        </IonItemGroup>
context form action innerawareness
        
        <IonList hidden={setVisible('1', signs!)}>
          <IonItem>

          </IonItem>
        </IonList>
        <IonList hidden={setVisible('2', signs!)}>
          <IonItem>

          </IonItem>
        </IonList>
        <IonList hidden={setVisible('3', signs!)}>
          <IonItem>

          </IonItem>
        </IonList>
        <IonList hidden={setVisible('4', signs!)}>
          <IonItem>

          </IonItem>
        </IonList>
        
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>

);
};

export default ScreenMenu;