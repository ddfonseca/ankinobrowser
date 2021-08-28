import React from 'react'
import * as S from './styled'

const MessageError = ({ handleButtonDismiss }) => {
    return (
        <S.MessageErrorWrapper>
            <S.WarningIcon />
            <S.H1>Ops!</S.H1>
            <S.P>
                Verifique se o Anki está aberto ou o AnkiConnect está instalado
                e configurado.
            </S.P>
            <S.Dismiss onClick={handleButtonDismiss}>Fechar</S.Dismiss>
        </S.MessageErrorWrapper>
    )
}

export default MessageError
