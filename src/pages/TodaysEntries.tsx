import MessageListItem from '../components/MessageListItem';
import { useState, useRef } from 'react';
import { Message, getMessages, getTodaysDreams, Dream } from '../data/messages';
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
    withIonLifeCycle,
    useIonViewWillLeave
} from '@ionic/react';
import './Home.css';
import { statsChartSharp } from 'ionicons/icons';
import { canConstructResponseFromBodyStream } from 'workbox-core/_private';

const ScreenMenu: React.FC = () => {
    
  const [messages, setMessages] = useState<Message[]>([]);


  const[title1,setTitle1] = useState<string>();
  const[lucid1,setLucid1] = useState<number>(0);
  const[dream1,setDream1] = useState<string>();
  const[tags1, setTags1] = useState<string>();

  const[title2,setTitle2] = useState<string>();
  const[lucid2,setLucid2] = useState<number>(0);
  const[dream2,setDream2] = useState<string>();
  const[tags2, setTags2] = useState<string>();

  const[title3,setTitle3] = useState<string>();
  const[lucid3,setLucid3] = useState<number>(0);
  const[dream3,setDream3] = useState<string>();
  const[tags3, setTags3] = useState<string>();

  const[title4,setTitle4] = useState<string>();
  const[lucid4,setLucid4] = useState<number>(0);
  const[dream4,setDream4] = useState<string>();
  const[tags4, setTags4] = useState<string>();

  const[title5,setTitle5] = useState<string>();
  const[lucid5,setLucid5] = useState<number>(0);
  const[dream5,setDream5] = useState<string>();
  const[tags5, setTags5] = useState<string>();

  const[title6,setTitle6] = useState<string>();
  const[lucid6,setLucid6] = useState<number>(0);
  const[dream6,setDream6] = useState<string>();
  const[tags6, setTags6] = useState<string>();

  const[title7,setTitle7] = useState<string>();
  const[lucid7,setLucid7] = useState<number>(0);
  const[dream7,setDream7] = useState<string>();
  const[tags7, setTags7] = useState<string>();

  const[title8,setTitle8] = useState<string>();
  const[lucid8,setLucid8] = useState<number>(0);
  const[dream8,setDream8] = useState<string>();
  const[tags8, setTags8] = useState<string>();

  const[title9,setTitle9] = useState<string>();
  const[lucid9,setLucid9] = useState<number>(0);
  const[dream9,setDream9] = useState<string>();
  const[tags9, setTags9] = useState<string>();

  const[title10,setTitle10] = useState<string>();
  const[lucid10,setLucid10] = useState<number>(0);
  const[dream10,setDream10] = useState<string>();
  const[tags10, setTags10] = useState<string>();

  const[title11,setTitle11] = useState<string>();
  const[lucid11,setLucid11] = useState<number>(0);
  const[dream11,setDream11] = useState<string>();
  const[tags11, setTags11] = useState<string>();

  const[title12,setTitle12] = useState<string>();
  const[lucid12,setLucid12] = useState<number>(0);
  const[dream12,setDream12] = useState<string>();
  const[tags12, setTags12] = useState<string>();

  const[title13,setTitle13] = useState<string>();
  const[lucid13,setLucid13] = useState<number>(0);
  const[dream13,setDream13] = useState<string>();
  const[tags13, setTags13] = useState<string>();

  const[title14,setTitle14] = useState<string>();
  const[lucid14,setLucid14] = useState<number>(0);
  const[dream14,setDream14] = useState<string>();
  const[tags14, setTags14] = useState<string>();

  const[title15,setTitle15] = useState<string>();
  const[lucid15,setLucid15] = useState<number>(0);
  const[dream15,setDream15] = useState<string>();
  const[tags15, setTags15] = useState<string>();

  const[title16,setTitle16] = useState<string>();
  const[lucid16,setLucid16] = useState<number>(0);
  const[dream16,setDream16] = useState<string>();
  const[tags16, setTags16] = useState<string>();

  const[title17,setTitle17] = useState<string>();
  const[lucid17,setLucid17] = useState<number>(0);
  const[dream17,setDream17] = useState<string>();
  const[tags17, setTags17] = useState<string>();

  const[title18,setTitle18] = useState<string>();
  const[lucid18,setLucid18] = useState<number>(0);
  const[dream18,setDream18] = useState<string>();
  const[tags18, setTags18] = useState<string>();

  const[title19,setTitle19] = useState<string>();
  const[lucid19,setLucid19] = useState<number>(0);
  const[dream19,setDream19] = useState<string>();
  const[tags19, setTags19] = useState<string>();

  const[title20,setTitle20] = useState<string>();
  const[lucid20,setLucid20] = useState<number>(0);
  const[dream20,setDream20] = useState<string>();
  const[tags20, setTags20] = useState<string>();

  const[title21,setTitle21] = useState<string>();
  const[lucid21,setLucid21] = useState<number>(0);
  const[dream21,setDream21] = useState<string>();
  const[tags21, setTags21] = useState<string>();

  const[title22,setTitle22] = useState<string>();
  const[lucid22,setLucid22] = useState<number>(0);
  const[dream22,setDream22] = useState<string>();
  const[tags22, setTags22] = useState<string>();

  const[title23,setTitle23] = useState<string>();
  const[lucid23,setLucid23] = useState<number>(0);
  const[dream23,setDream23] = useState<string>();
  const[tags23, setTags23] = useState<string>();

  const[title24,setTitle24] = useState<string>();
  const[lucid24,setLucid24] = useState<number>(0);
  const[dream24,setDream24] = useState<string>();
  const[tags24, setTags24] = useState<string>();

  const[title25,setTitle25] = useState<string>();
  const[lucid25,setLucid25] = useState<number>(0);
  const[dream25,setDream25] = useState<string>();
  const[tags25, setTags25] = useState<string>();

  const[page, setPage] = useState<string>();
  const[count, setCount] = useState<number>(1);
  const [today, setToday] = useState<string>();

  const selector = useRef(null);

  const addCount = (count: number) => {
    if(count < 25){
      count = count + 1;
      setPage(count.toString());
    }
    setCount(count);
  }

  const starTap = (lucid: number) => {
    lucid = lucid + 1;
    if(lucid > 2){
      lucid = 0;
    }
    return lucid;
  }

  const toTags = (dream: Dream) => {
    var tagString = "";
  
    for(const tag in dream.tags){
      tagString = tagString + dream.tags[tag] + ", ";
    }
    return tagString;
  };

  var Dreams = getTodaysDreams();

  var tags: string[];


  useIonViewWillEnter(() => {
    var Remembercount = 0;
    for(const dream in Dreams){
      Remembercount += 1;
    }
    setPage('1');//place holder open newest tab
    setCount(Remembercount);
    if(Remembercount > 0){
      setTitle1(Dreams[0].title);
      setLucid1(Dreams[0].lucid);
      setDream1(Dreams[0].dreamText);
      setTags1((toTags(Dreams[0])));
    }
    if(Remembercount > 1){
    setTitle2(Dreams[1].title);
    setLucid2(Dreams[1].lucid)
    setDream2(Dreams[1].dreamText);
    setTags2((toTags(Dreams[1])));
    }
    if(Remembercount > 2){
    setTitle3(Dreams[2].title);
    setLucid3(Dreams[2].lucid)
    setDream3(Dreams[2].dreamText);
    setTags3((toTags(Dreams[2])));
    }
    if(Remembercount > 3){
    setTitle4(Dreams[3].title);
    setLucid4(Dreams[3].lucid)
    setDream4(Dreams[3].dreamText);
    setTags4((toTags(Dreams[3])));
  }
    if(Remembercount > 4){
    setTitle5(Dreams[4].title);
    setLucid5(Dreams[4].lucid)
    setDream5(Dreams[4].dreamText);
    setTags5((toTags(Dreams[4])));
  }
    if(Remembercount > 5){
    setTitle6(Dreams[5].title);
    setLucid6(Dreams[5].lucid)
    setDream6(Dreams[5].dreamText);
    setTags6((toTags(Dreams[5])));
  }
    if(Remembercount > 6){
    setTitle7(Dreams[6].title);
    setLucid7(Dreams[6].lucid)
    setDream7(Dreams[6].dreamText);
    setTags7((toTags(Dreams[6])));
  }
    if(Remembercount > 7){
    setTitle8(Dreams[7].title);
    setLucid8(Dreams[7].lucid)
    setDream8(Dreams[7].dreamText);
    setTags8((toTags(Dreams[7])));
  }
    if(Remembercount > 8){
    setTitle9(Dreams[8].title);
    setLucid9(Dreams[8].lucid)
    setDream9(Dreams[8].dreamText);
    setTags9((toTags(Dreams[8])));
  }
    if(Remembercount > 9){
    setTitle10(Dreams[9].title);
    setLucid10(Dreams[9].lucid)
    setDream10(Dreams[9].dreamText);
    setTags10((toTags(Dreams[9])));
  }
    if(Remembercount > 10){
    setTitle11(Dreams[10].title);
    setLucid11(Dreams[10].lucid)
    setDream11(Dreams[10].dreamText);
    setTags11((toTags(Dreams[10])));
  }
    if(Remembercount > 11){
    setTitle12(Dreams[11].title);
    setLucid12(Dreams[11].lucid)
    setDream12(Dreams[11].dreamText);
    setTags12((toTags(Dreams[11])));
  }
    if(Remembercount > 12){
    setTitle13(Dreams[12].title);
    setLucid13(Dreams[12].lucid)
    setDream13(Dreams[12].dreamText);
    setTags13((toTags(Dreams[12])));
  }
    if(Remembercount > 13){
    setTitle14(Dreams[13].title);
    setLucid14(Dreams[13].lucid)
    setDream14(Dreams[13].dreamText);
    setTags14((toTags(Dreams[13])));
  }
    if(Remembercount > 14){
    setTitle15(Dreams[14].title);
    setLucid15(Dreams[14].lucid)
    setDream15(Dreams[14].dreamText);
    setTags15((toTags(Dreams[14])));
  }
    if(Remembercount > 15){
    setTitle16(Dreams[15].title);
    setLucid16(Dreams[15].lucid)
    setDream16(Dreams[15].dreamText);
    setTags16((toTags(Dreams[15])));
  }
    if(Remembercount > 16){
    setTitle17(Dreams[16].title);
    setLucid17(Dreams[16].lucid)
    setDream17(Dreams[16].dreamText);
    setTags17((toTags(Dreams[16])));
  }
    if(Remembercount > 17){
    setTitle18(Dreams[17].title);
    setLucid18(Dreams[17].lucid)
    setDream18(Dreams[17].dreamText);
    setTags18((toTags(Dreams[17])));
  }
    if(Remembercount > 18){
    setTitle19(Dreams[18].title);
    setLucid19(Dreams[18].lucid)
    setDream19(Dreams[18].dreamText);
    setTags19((toTags(Dreams[18])));
  }
    if(Remembercount > 19){
    setTitle20(Dreams[19].title);
    setLucid20(Dreams[19].lucid)
    setDream20(Dreams[19].dreamText);
    setTags20((toTags(Dreams[19])));
  }
    if(Remembercount > 20){
    setTitle21(Dreams[20].title);
    setLucid21(Dreams[20].lucid)
    setDream21(Dreams[20].dreamText);
    setTags21((toTags(Dreams[20])));
  }
    if(Remembercount > 21){
    setTitle22(Dreams[21].title);
    setLucid22(Dreams[21].lucid)
    setDream22(Dreams[21].dreamText);
    setTags22((toTags(Dreams[21])));
  }
    if(Remembercount > 22){
    setTitle23(Dreams[22].title);
    setLucid23(Dreams[22].lucid)
    setDream23(Dreams[22].dreamText);
    setTags23((toTags(Dreams[22])));
  }
    if(Remembercount > 23){
    setTitle24(Dreams[23].title);
    setLucid24(Dreams[23].lucid)
    setDream24(Dreams[23].dreamText);
    setTags24((toTags(Dreams[23])));
  }
    if(Remembercount > 24){
    setTitle25(Dreams[24].title);
    setLucid25(Dreams[24].lucid)
    setDream25(Dreams[24].dreamText);
    setTags25((toTags(Dreams[24])));
  }

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

  const saveData = () => {

    var date = new Date();
    var monthOfYearInt = date.getMonth();
    var monthOfYearString;
    monthOfYearInt = monthOfYearInt + 1;
    if(monthOfYearInt < 10){
      monthOfYearString = '0' + monthOfYearInt.toString();
    }
    else{
      monthOfYearString = monthOfYearInt.toString();
    }
    var nowDay = (date.getFullYear().toString() + '-' + monthOfYearString + '-' + date.getDate().toString());

    setToday(nowDay);



  }

  useIonViewWillLeave(() => {
    saveData();
  });

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

  function getImage(type: number): string {
    var image = "../assets/icon/empty-star-transparent.png";
    if (type == 0) {
      image = "../assets/icon/empty-star-transparent.png";
    }
    else if (type == 1) {
      image = "../assets/icon/fullstar-transparent.png";
    }
    else {
      image = "../assets/icon/halfstar-transparent.png";
    }
    return image;
  }

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
        <IonItem className="page-title">
          <IonLabel className="page-banner">Today's Journal</IonLabel>
        </IonItem>

        <IonItemGroup class="tabs">
        <IonSegment ref={selector} scrollable = {true} onIonChange={e => setPage(e.detail.value)} value={page}>
          <IonSegmentButton value='1' >
            <IonLabel> {title1} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='2' hidden={setVisibleNumb(2, count)}>
            <IonLabel> {title2} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='3' hidden={setVisibleNumb(3, count)}>
            <IonLabel> {title3} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='4' hidden={setVisibleNumb(4, count)}>
            <IonLabel> {title4} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='5' hidden={setVisibleNumb(5, count)}>
            <IonLabel> {title5} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='6' hidden={setVisibleNumb(6, count)}>
            <IonLabel> {title6} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='7' hidden={setVisibleNumb(7, count)}>
            <IonLabel> {title7} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='8' hidden={setVisibleNumb(8, count)}>
            <IonLabel> {title8} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='9' hidden={setVisibleNumb(9, count)}>
            <IonLabel> {title9} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='10' hidden={setVisibleNumb(10, count)}>
            <IonLabel> {title10} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='11' hidden={setVisibleNumb(11, count)}>
            <IonLabel> {title11} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='12' hidden={setVisibleNumb(12, count)}>
            <IonLabel> {title12} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='13' hidden={setVisibleNumb(13, count)}>
            <IonLabel> {title13} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='14' hidden={setVisibleNumb(14, count)}>
            <IonLabel> {title14} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='15' hidden={setVisibleNumb(15, count)}>
            <IonLabel> {title15} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='16' hidden={setVisibleNumb(16, count)}>
            <IonLabel> {title16} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='17' hidden={setVisibleNumb(17, count)}>
            <IonLabel> {title17} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='18' hidden={setVisibleNumb(18, count)}>
            <IonLabel> {title18} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='19' hidden={setVisibleNumb(19, count)}>
            <IonLabel> {title19} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='20' hidden={setVisibleNumb(20, count)}>
            <IonLabel> {title20} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='21' hidden={setVisibleNumb(21, count)}>
            <IonLabel> {title21} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='22' hidden={setVisibleNumb(22, count)}>
            <IonLabel> {title22} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='23' hidden={setVisibleNumb(23, count)}>
            <IonLabel> {title23} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='24' hidden={setVisibleNumb(24, count)}>
            <IonLabel> {title24} </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='25' hidden={setVisibleNumb(25, count)}>
            <IonLabel> {title25} </IonLabel>
          </IonSegmentButton>
          </IonSegment>
        
        <IonButton class="add-button" hidden={!setVisible('25', count!.toString())} shape="round" onClick={e => addCount(count!)} >+</IonButton>
        </IonItemGroup>
        {/*e => setCount(addCount(count!)); }*/}

        <IonItemGroup class="journal-dream" hidden={setVisible('1', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title1} onIonChange={e => setTitle1(e.detail.value!)}></IonInput>
            <IonButton class="star-button" onClick={e => setLucid1(starTap(lucid1))}><img src={getImage(lucid1)} /></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid2(starTap(lucid2))}><img src={getImage(lucid2)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid3(starTap(lucid3))}><img src={getImage(lucid3)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid4(starTap(lucid4))}><img src={getImage(lucid4)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid5(starTap(lucid5))}><img src={getImage(lucid5)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid6(starTap(lucid6))}><img src={getImage(lucid6)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid7(starTap(lucid7))}><img src={getImage(lucid7)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid8(starTap(lucid8))}><img src={getImage(lucid8)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid9(starTap(lucid9))}><img src={getImage(lucid9)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid10(starTap(lucid10))}><img src={getImage(lucid10)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid11(starTap(lucid11))}><img src={getImage(lucid11)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid12(starTap(lucid11))}><img src={getImage(lucid12)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid13(starTap(lucid13))}><img src={getImage(lucid13)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid14(starTap(lucid14))}><img src={getImage(lucid14)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid15(starTap(lucid15))}><img src={getImage(lucid15)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid16(starTap(lucid16))}><img src={getImage(lucid16)}/></IonButton>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream16} onIonChange={e => setDream16(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags16} placeholder="separate tags with commas" onIonChange={e => setTags16(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup class="journal-dream" hidden={setVisible('17', page!)}>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Dream Title" value={title17} onIonChange={e => setTitle17(e.detail.value!)}></IonInput>
            <IonButton class="star-button" onClick={e => setLucid17(starTap(lucid17))}><img src={getImage(lucid17)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid18(starTap(lucid18))}><img src={getImage(lucid18)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid19(starTap(lucid19))}><img src={getImage(lucid19)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid20(starTap(lucid20))}><img src={getImage(lucid20)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid21(starTap(lucid21))}><img src={getImage(lucid21)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid22(starTap(lucid22))}><img src={getImage(lucid22)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid23(starTap(lucid23))}><img src={getImage(lucid23)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid24(starTap(lucid24))}><img src={getImage(lucid24)}/></IonButton>
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
            <IonButton class="star-button" onClick={e => setLucid25(starTap(lucid25))}><img src={getImage(lucid25)}/></IonButton>
          </IonItem>
          <IonItem class="journal-entry">
            <IonTextarea value={dream25} onIonChange={e => setDream25(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem class="journal-tags">
            <IonTextarea value={tags25} placeholder="separate tags with commas" onIonChange={e => setTags25(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonItemGroup>

        
        <IonFooter className="footer-content">
          <IonButton onClick={e => saveData()} className="big-button">Save Entries</IonButton>
        </IonFooter>
      </IonContent>
    </IonPage>

);
};

export default ScreenMenu;