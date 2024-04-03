import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { AppSafeAreaView } from '../../component/AppSafeAreaView';
import { AppView } from '../../component/AppView';
import { styles } from './style';
import { AppCardView } from '../../component/AppCardView';
import { CandidateIntroView } from '../../component/CandidateIntroView';
import { CandidateDetailsView } from '../../component/CandidateDetailsView';
import { CandidateInterface, getCandidate } from '../../TypesAndInterfaces/CandidateInterface';
import { AppScrollView } from '../../component/AppScrollView';

export const First = () => {

    // const style=styles./
    const [Data, setData] = useState<CandidateInterface | null>();

    useEffect(() => {

        setData(getCandidate());

    }, [])

    return (
        <AppSafeAreaView style={styles.SafeareaViewStyle}>

            <AppCardView style={styles.MainView}>
                <AppScrollView
                    >

                    <AppView style={styles.childAppView
                    }>


                        {
                            Data ?
                                <CandidateIntroView Imageurl={Data?.image}
                                    name={Data?.name}
                                    Profilename={Data?.profileName}
                                ></CandidateIntroView> : <></>
                        }



                        {
                            Data ?
                                <CandidateDetailsView
                                    Email={Data?.Email}
                                    LinkdikUrl={Data?.LinkdikUrl}
                                    Mobile={Data?.ContactNo}
                                    Address={Data?.Address}
                                    aboutme={Data?.Aboutme}
                                ></CandidateDetailsView> : <></>
                        }


                    </AppView>
                </AppScrollView>

            </AppCardView>


        </AppSafeAreaView>
    )
}