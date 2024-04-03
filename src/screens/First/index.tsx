import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AppSafeAreaView } from '../../component/AppSafeAreaView';
import { AppView } from '../../component/AppView';
import { styles } from './style';
import { AppCardView } from '../../component/AppCardView';
import { CandidateIntroView } from '../../component/CandidateIntroView';
import { CandidateDetailsView } from '../../component/CandidateDetailsView';
import { CandidateInterface, getCandidate } from '../../TypesAndInterfaces/CandidateInterface';

export const First = () => {

    // const style=styles./
    const [Data, setData] = useState<CandidateInterface | null>();

    useEffect(() => {

        setData(getCandidate());

    }, [])

    return (
        <AppSafeAreaView style={styles.SafeareaViewStyle}>
            <AppCardView style={styles.MainView}>
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

            </AppCardView>
        </AppSafeAreaView>
    )
}