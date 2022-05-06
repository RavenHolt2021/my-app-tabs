import Alarm from "../pages/Alarm";


export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
}

export interface Dream {
  title: string;
  lucid: number;
  dreamText: string;
  tags: string[];
  date: string;
  id: string;
}

export interface TodaysDream{
  title: string;
  lucid: number;
  dreamText: string;
  tags: string[];
  date: string;
  id: string;
  page: number;
}

export interface Alarm{
  days: number[];
  time: string;
  touchless: boolean;
  length: number;
  audio: string;
  note: string;
  showNote: boolean;
  enabled: boolean;
  id: string;
}

const messages: Message[] = [
  {
    fromName: 'Matt Chorsey',
    subject: 'New event: Trip to Vegas',
    date: '9:32 AM',
    id: 0
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Long time no chat',
    date: '6:12 AM',
    id: 1
  },
  {
    fromName: 'Jordan Firth',
    subject: 'Report Results',
    date: '4:55 AM',
    id: 2

  },
  {
    fromName: 'Bill Thomas',
    subject: 'The situation',
    date: 'Yesterday',
    id: 3
  },
  {
    fromName: 'Joanne Pollan',
    subject: 'Updated invitation: Swim lessons',
    date: 'Yesterday',
    id: 4
  },
  {
    fromName: 'Andrea Cornerston',
    subject: 'Last minute ask',
    date: 'Yesterday',
    id: 5
  },
  {
    fromName: 'Moe Chamont',
    subject: 'Family Calendar - Version 1',
    date: 'Last Week',
    id: 6
  },
  {
    fromName: 'Kelly Richardson',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    id: 7
  }
];

var Dreams: Dream[] = [
  {
    title: 'Example Dream',
    lucid: 1,
    dreamText: 'Welcome to Lucid Companion! We wish you the best on your lucid journey. May you have many lucid dreams, full dream control, excelent dream length',
    tags: ['dream', 'first', 'example', 'tags', 'tagged', 'april', 'spring', 'lucid'],
    date:"2022-04-29",
    id: "0"
  }
];

var TodaysDreams: TodaysDream[] = [
  {
    title: 'Example Dream for Today',
    lucid: 1,
    dreamText: 'Welcome to Lucid Companion! We wish you the best on your lucid journey.',
    tags: ['dream', 'first', 'example'],
    date:"2022-04-29",
    id: "0",
    page: 1
  }
  
];

var Alarms: Alarm[] = [

];


export const getMessages = () => messages;
export const getMessage = (id: number) => messages.find(m => m.id === id);


export const getDreams = () => Dreams;
export const getDream = (id: string) => Dreams.find(m => m.id === id);

export const getTodaysDreams = () => TodaysDreams;
export const getTodaysDream = (id: number) => TodaysDreams.find(m => m.page === id);

export const getAlarms = () => Alarms;
export const getAlarm = (id: string) => Alarms.find(m => m.id === id);