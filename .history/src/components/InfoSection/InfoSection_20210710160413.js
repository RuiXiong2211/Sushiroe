import React from 'react'
import { InfoSec, InfoRow, TextWrapper, InfoColumn } from './InfoSection.elements'
import { Container } from '../../globalStyles'

const InfoSection = ({lightBg, imgStart}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                Home Page
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
