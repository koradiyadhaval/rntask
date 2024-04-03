import { UserImage } from "../../Util/Images";

export interface CandidateInterface{
    name:string,
    image?:any,
    profileName:string,
    ContactNo?:string,
    Email?:string,
    Address?:string,
    LinkdikUrl?:string,
    Aboutme?:string,

}

export const getCandidate=():CandidateInterface=>{
    const data:CandidateInterface={
        name:"Dhaval Koradiya",
        profileName:"Mobile Application Developer",
        image:UserImage,
        ContactNo:"+91 9033403889",
        Email:"koradiyadhaval@gmail.com",
        Address:"B101, Surynash Solitaire, Canal road, Ahmedabad-380059",
        LinkdikUrl:'https://www.linkedin.com/in/dhaval-k-09924374/',
        Aboutme:" Motivated with 8.9 years of Area of expertise. Inside the Android native I have 7 years experience, 3 years experience in React-native. Mainly Using JavaScript, Typescript, Axios, ContextAPI, Google map, Firebase Notification, Redux-toolkit, ReactJS hooks, React-native-form and React-native navigation, Class base component, Functional base component also and 1 year working in ReactJS",
    }


    return data;
}