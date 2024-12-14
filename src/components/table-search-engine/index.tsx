import * as S from './styles'
import SearchIcon from '../../assets/search.svg?react'
import AppButton from '../app-button'

type TableSearchEngineProps = {
  onSearch: () => void
  onChange: (value: string) => void
  value?: string
}

const TableSearchEngine: React.FC<TableSearchEngineProps> = ({ value, onChange, onSearch }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  const handleSearchClick = () => {
    onSearch()
  }

  return (
    <S.TableSearchEngine>
      <S.SearchIconContainer>
        <SearchIcon />
      </S.SearchIconContainer>
      <S.SearchInput
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <AppButton onClick={handleSearchClick}>Search</AppButton>
    </S.TableSearchEngine>
  )
}

export default TableSearchEngine
