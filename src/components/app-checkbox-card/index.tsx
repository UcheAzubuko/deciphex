import React, { useState, useEffect, useRef } from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import * as S from './styles'
import AppButton from '../app-button'

type AppCheckboxCardProps = {
  buttonLabel: string
  options: {
    label: string
    value: string
  }[]
  selectedOptions: string[]
  onSelectionChange: (selected: string[]) => void
}

const AppCheckboxCard: React.FC<AppCheckboxCardProps> = ({ ...props }) => {
  const [isCheckboxVisible, setCheckboxVisibility] = useState<boolean>(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleCheckboxVisibility = () => {
    setCheckboxVisibility(!isCheckboxVisible)
  }

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const columns = props.selectedOptions
    const updatedValues = checked ? [...columns, value] : columns.filter((item) => item !== value)
    props.onSelectionChange(updatedValues)
  }

  const handleWrapperClick = (value: string) => {
    const isCurrentlyChecked = props.selectedOptions.includes(value)
    handleCheckboxChange(value, !isCurrentlyChecked)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setCheckboxVisibility(false)
    }
  }

  useEffect(() => {
    if (isCheckboxVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCheckboxVisible])

  return (
    <S.AppCheckboxWrapper ref={wrapperRef}>
      <AppButton onClick={handleCheckboxVisibility}>{props.buttonLabel}</AppButton>
      {isCheckboxVisible && (
        <S.CardWrapper>
          <S.CheckboxGroup>
            {props.options.map((option) => (
              <S.CheckboxItemWrapper
                key={option.value}
                onClick={() => handleWrapperClick(option.value)}
              >
                <S.StyledCheckbox
                  id={option.value}
                  checked={props.selectedOptions.includes(option.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(option.value, checked === true)
                  }
                >
                  <S.StyledIndicator>
                    <CheckIcon />
                  </S.StyledIndicator>
                </S.StyledCheckbox>
                <label
                  htmlFor={option.value}
                  onClick={(e) => {
                    e.preventDefault()
                    handleWrapperClick(option.value)
                  }}
                >
                  {option.label}
                </label>
              </S.CheckboxItemWrapper>
            ))}
          </S.CheckboxGroup>
        </S.CardWrapper>
      )}
    </S.AppCheckboxWrapper>
  )
}

export default AppCheckboxCard
