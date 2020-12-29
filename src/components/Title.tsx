import { TitleContainer } from '../theme/Title.theme';

export function Title() {
    return(
        <TitleContainer>
            <div className="heading">
                <img src="/logo.jpg"/>
                <h1>Arweave Node Guide</h1>
            </div>
        </TitleContainer>
    )
}