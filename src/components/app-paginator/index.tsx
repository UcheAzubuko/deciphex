import React from 'react'
import * as S from './styles'
import RightCaretIcon from '../../assets/right-caret.svg?react'

type PaginatorProps = {
  displayRange: string
  totalPages: number
  currentPage: number
  onNext: () => void
  onPrev: () => void
}

const AppPaginator: React.FC<PaginatorProps> = ({
  displayRange,
  totalPages,
  currentPage,
  onNext
}) => {
  return (
    <S.PaginatorWrapper>
      <S.PaginatorMetaData>
        <span>{displayRange}</span>
      </S.PaginatorMetaData>
      <S.PaginatorControls>
        <S.PaginatorButton className="text-button">{currentPage}</S.PaginatorButton>
        <div>/{totalPages}</div>
        <S.PaginatorButton disabled={currentPage === totalPages} onClick={onNext}>
          <RightCaretIcon />
        </S.PaginatorButton>
      </S.PaginatorControls>
    </S.PaginatorWrapper>
  )
}

export default AppPaginator
