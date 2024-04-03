import { UserImage } from "../../Util/Images";

export interface EducationInformation{
    cource_name:string,
    name:string,
    start_years:string,
    end_year:string,
    location:string,
}

export interface CandidateInterface{
    name:string,
    image?:any,
    profileName:string,
    ContactNo?:string,
    Email?:string,
    Address?:string,
    LinkdikUrl?:string,
    Aboutme?:string,
    education?:EducationInformation[],
}

export const getCandidate=():CandidateInterface=>{
    const bca:EducationInformation={cource_name:" Bachelor of Computer Applications",name:" JKM BCA & BBA college",start_years:"2007",end_year:"2009",location:"Junagadh, Gujarat, India"}

    const mca:EducationInformation={cource_name:" Master of Computer Applications",name:" MGI",start_years:"2010",end_year:"2013",location:"Rajkot, Gujarat, India"}


    const data:CandidateInterface={
        name:"Dhaval Koradiya",
        profileName:"Mobile Application Developer",
        image:UserImage,
        ContactNo:"+91 9033403889",
        Email:"koradiyadhaval@gmail.com",
        Address:"B101, Surynash Solitaire, Canal road, Ahmedabad-380059",
        LinkdikUrl:'https://www.linkedin.com/in/dhaval-k-09924374/',
        education:[bca,mca],
        Aboutme:" Motivated with 8.9 years of Area of expertise. Inside the Android native I have 7 years experience, 3 years experience in React-native. Mainly Using JavaScript, Typescript, Axios, ContextAPI, Google map, Firebase Notification, Redux-toolkit, ReactJS hooks, React-native-form and React-native navigation, Class base component, Functional base component also and 1 year working in ReactJS",
    }


    return data
}