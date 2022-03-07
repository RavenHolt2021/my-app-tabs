import MessageListItem from '../components/MessageListItem';
import { useState, useRef } from 'react';
import { Message, getMessages } from '../data/messages';
import {IonTagsInputModule} from 'ionic-tags-input';
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
    IonItem,
    IonLabel,
    IonTextarea,
    IonInput,
    IonSegment,
    IonSegmentButton,
    IonItemGroup,
    withIonLifeCycle
} from '@ionic/react';
import './Home.css';

const ScreenMenu: React.FC = () => {
    
  const [messages, setMessages] = useState<Message[]>([]);


  const[title1,setTitle1] = useState<string>();
  const[dream1,setDream1] = useState<string>();
  const[tags1, setTags1] = useState<string>();

  const[title2,setTitle2] = useState<string>();
  const[dream2,setDream2] = useState<string>();
  const[tags2, setTags2] = useState<string>();

  const[title3,setTitle3] = useState<string>();
  const[dream3,setDream3] = useState<string>();
  const[tags3, setTags3] = useState<string>();

  const[title4,setTitle4] = useState<string>();
  const[dream4,setDream4] = useState<string>();
  const[tags4, setTags4] = useState<string>();

  const[title5,setTitle5] = useState<string>();
  const[dream5,setDream5] = useState<string>();
  const[tags5, setTags5] = useState<string>();

  const[title6,setTitle6] = useState<string>();
  const[dream6,setDream6] = useState<string>();
  const[tags6, setTags6] = useState<string>();

  const[title7,setTitle7] = useState<string>();
  const[dream7,setDream7] = useState<string>();
  const[tags7, setTags7] = useState<string>();

  const[title8,setTitle8] = useState<string>();
  const[dream8,setDream8] = useState<string>();
  const[tags8, setTags8] = useState<string>();

  const[title9,setTitle9] = useState<string>();
  const[dream9,setDream9] = useState<string>();
  const[tags9, setTags9] = useState<string>();

  const[title10,setTitle10] = useState<string>();
  const[dream10,setDream10] = useState<string>();
  const[tags10, setTags10] = useState<string>();

  const[title11,setTitle11] = useState<string>();
  const[dream11,setDream11] = useState<string>();
  const[tags11, setTags11] = useState<string>();

  const[title12,setTitle12] = useState<string>();
  const[dream12,setDream12] = useState<string>();
  const[tags12, setTags12] = useState<string>();

  const[title13,setTitle13] = useState<string>();
  const[dream13,setDream13] = useState<string>();
  const[tags13, setTags13] = useState<string>();

  const[title14,setTitle14] = useState<string>();
  const[dream14,setDream14] = useState<string>();
  const[tags14, setTags14] = useState<string>();

  const[title15,setTitle15] = useState<string>();
  const[dream15,setDream15] = useState<string>();
  const[tags15, setTags15] = useState<string>();

  const[title16,setTitle16] = useState<string>();
  const[dream16,setDream16] = useState<string>();
  const[tags16, setTags16] = useState<string>();

  const[title17,setTitle17] = useState<string>();
  const[dream17,setDream17] = useState<string>();
  const[tags17, setTags17] = useState<string>();

  const[title18,setTitle18] = useState<string>();
  const[dream18,setDream18] = useState<string>();
  const[tags18, setTags18] = useState<string>();

  const[title19,setTitle19] = useState<string>();
  const[dream19,setDream19] = useState<string>();
  const[tags19, setTags19] = useState<string>();

  const[title20,setTitle20] = useState<string>();
  const[dream20,setDream20] = useState<string>();
  const[tags20, setTags20] = useState<string>();

  const[title21,setTitle21] = useState<string>();
  const[dream21,setDream21] = useState<string>();
  const[tags21, setTags21] = useState<string>();

  const[title22,setTitle22] = useState<string>();
  const[dream22,setDream22] = useState<string>();
  const[tags22, setTags22] = useState<string>();

  const[title23,setTitle23] = useState<string>();
  const[dream23,setDream23] = useState<string>();
  const[tags23, setTags23] = useState<string>();

  const[title24,setTitle24] = useState<string>();
  const[dream24,setDream24] = useState<string>();
  const[tags24, setTags24] = useState<string>();

  const[title25,setTitle25] = useState<string>();
  const[dream25,setDream25] = useState<string>();
  const[tags25, setTags25] = useState<string>();

  const[page, setPage] = useState<string>();
  const[count, setCount] = useState<number>(1);

  const selector = useRef(null);

  const addCount = (count: number) => {
    if(count < 25){
      count = count + 1;
      setPage(count.toString());
    }
    setCount(count);
  }

  useIonViewWillEnter(() => {
    setPage('1');
    setCount(1);
  });

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const setVisible = (selectedValue: string, compareValue: string): boolean => {
    let val = true;
    if(selectedValue == compareValue){
      val = false;
    }
    return val;
  };
  const setVisibleNumb = (selectedValue: number, compareValue: number): boolean => {
    let val = true;
    if(selectedValue <= compareValue){
      val = false;
    }
    return val;
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

        <IonItemGroup class="tabs">
        <IonSegment ref={selector} scrollable = {true} onIonChange={e => setPage(e.detail.value)} value={page}>
          <IonSegmentButton value='1' >
            <IonLabel>{title1}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='2' hidden={setVisibleNumb(2, count)}>
            <IonLabel>{title2}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='3' hidden={setVisibleNumb(3, count)}>
            <IonLabel>{title3}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='4' hidden={setVisibleNumb(4, count)}>
            <IonLabel>{title4}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='5' hidden={setVisibleNumb(5, count)}>
            <IonLabel>{title5}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='6' hidden={setVisibleNumb(6, count)}>
            <IonLabel>{title6}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='7' hidden={setVisibleNumb(7, count)}>
            <IonLabel>{title7}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='8' hidden={setVisibleNumb(8, count)}>
            <IonLabel>{title8}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='9' hidden={setVisibleNumb(9, count)}>
            <IonLabel>{title9}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='10' hidden={setVisibleNumb(10, count)}>
            <IonLabel>{title10}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='11' hidden={setVisibleNumb(11, count)}>
            <IonLabel>{title11}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='12' hidden={setVisibleNumb(12, count)}>
            <IonLabel>{title12}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='13' hidden={setVisibleNumb(13, count)}>
            <IonLabel>{title13}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='14' hidden={setVisibleNumb(14, count)}>
            <IonLabel>{title14}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='15' hidden={setVisibleNumb(15, count)}>
            <IonLabel>{title15}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='16' hidden={setVisibleNumb(16, count)}>
            <IonLabel>{title16}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='17' hidden={setVisibleNumb(17, count)}>
            <IonLabel>{title17}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='18' hidden={setVisibleNumb(18, count)}>
            <IonLabel>{title18}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='19' hidden={setVisibleNumb(19, count)}>
            <IonLabel>{title19}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='20' hidden={setVisibleNumb(20, count)}>
            <IonLabel>{title20}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='21' hidden={setVisibleNumb(21, count)}>
            <IonLabel>{title21}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='22' hidden={setVisibleNumb(22, count)}>
            <IonLabel>{title22}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='23' hidden={setVisibleNumb(23, count)}>
            <IonLabel>{title23}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='24' hidden={setVisibleNumb(24, count)}>
            <IonLabel>{title24}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='25' hidden={setVisibleNumb(25, count)}>
            <IonLabel>{title25}</IonLabel>
          </IonSegmentButton>
          </IonSegment>
        
        <IonButton class="add-button" hidden={!setVisible('25', count!.toString())} onClick={e => addCount(count!)} >+</IonButton>
        </IonItemGroup>
        {/*e => setCount(addCount(count!)); }*/}

        <IonItemGroup class="journal-dream" hidden={setVisible('1', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title1} onIonChange={e => setTitle1(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream1} onIonChange={e => setDream1(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags1} placeholder="separate tags with commas" onIonChange={e => setTags1(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('2', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title2} onIonChange={e => setTitle2(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream2} onIonChange={e => setDream2(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags2} placeholder="separate tags with commas" onIonChange={e => setTags2(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('3', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title3} onIonChange={e => setTitle3(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream3} onIonChange={e => setDream3(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags3} placeholder="separate tags with commas" onIonChange={e => setTags3(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('4', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title4} onIonChange={e => setTitle4(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream4} onIonChange={e => setDream4(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags4} placeholder="separate tags with commas" onIonChange={e => setTags4(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('5', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title5} onIonChange={e => setTitle5(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream5} onIonChange={e => setDream5(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags5} placeholder="separate tags with commas" onIonChange={e => setTags5(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('6', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title6} onIonChange={e => setTitle6(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream6} onIonChange={e => setDream6(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags6} placeholder="separate tags with commas" onIonChange={e => setTags6(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('7', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title7} onIonChange={e => setTitle7(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream7} onIonChange={e => setDream7(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags7} placeholder="separate tags with commas" onIonChange={e => setTags7(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('8', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title8} onIonChange={e => setTitle8(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream8} onIonChange={e => setDream8(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags8} placeholder="separate tags with commas" onIonChange={e => setTags8(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('9', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title9} onIonChange={e => setTitle9(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream9} onIonChange={e => setDream9(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags9} placeholder="separate tags with commas" onIonChange={e => setTags9(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('10', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title10} onIonChange={e => setTitle10(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream10} onIonChange={e => setDream10(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags10} placeholder="separate tags with commas" onIonChange={e => setTags10(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('11', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title11} onIonChange={e => setTitle11(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream11} onIonChange={e => setDream11(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags11} placeholder="separate tags with commas" onIonChange={e => setTags11(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('12', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title12} onIonChange={e => setTitle12(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream12} onIonChange={e => setDream12(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags12} placeholder="separate tags with commas" onIonChange={e => setTags12(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('13', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title13} onIonChange={e => setTitle13(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream13} onIonChange={e => setDream13(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags13} placeholder="separate tags with commas" onIonChange={e => setTags13(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('14', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title14} onIonChange={e => setTitle14(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream14} onIonChange={e => setDream14(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags14} placeholder="separate tags with commas" onIonChange={e => setTags14(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('15', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title15} onIonChange={e => setTitle15(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream15} onIonChange={e => setDream15(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags15} placeholder="separate tags with commas" onIonChange={e => setTags15(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('16', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title16} onIonChange={e => setTitle16(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream16} placeholder="separate tags with commas" onIonChange={e => setDream16(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags16} onIonChange={e => setTags16(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('17', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title17} onIonChange={e => setTitle17(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream17} onIonChange={e => setDream17(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags17} placeholder="separate tags with commas" onIonChange={e => setTags17(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('18', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title18} onIonChange={e => setTitle18(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream18} onIonChange={e => setDream18(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags18} placeholder="separate tags with commas" onIonChange={e => setTags18(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('19', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title19} onIonChange={e => setTitle19(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream19} onIonChange={e => setDream19(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags19} placeholder="separate tags with commas" onIonChange={e => setTags19(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('20', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title20} onIonChange={e => setTitle20(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream20} onIonChange={e => setDream20(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags20} placeholder="separate tags with commas" onIonChange={e => setTags20(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('21', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title21} onIonChange={e => setTitle21(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream21} onIonChange={e => setDream21(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags21} placeholder="separate tags with commas" onIonChange={e => setTags21(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('22', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title22} onIonChange={e => setTitle22(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream22} onIonChange={e => setDream22(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags22} placeholder="separate tags with commas" onIonChange={e => setTags22(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('23', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title23} onIonChange={e => setTitle23(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream23} onIonChange={e => setDream23(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags23} placeholder="separate tags with commas" onIonChange={e => setTags23(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('24', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title24} onIonChange={e => setTitle24(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream24} onIonChange={e => setDream24(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags24} placeholder="separate tags with commas" onIonChange={e => setTags24(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('25', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title25} onIonChange={e => setTitle25(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream25} onIonChange={e => setDream25(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags25} placeholder="separate tags with commas" onIonChange={e => setTags25(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>
        
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>

);
};

export default ScreenMenu;