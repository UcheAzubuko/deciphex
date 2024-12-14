import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DropdownTrigger, DropdownContent, DropdownItem, DropdownSeparator } from './styles'
import DropdownMenuIcon from '../../assets/arrow-dropdown.svg?react'

type DropdownProps = {
  children: React.ReactNode
  items: { label: string; value: string }[]
  onClick: (value: any) => void
  hasSeparator?: boolean
  isTable?: boolean
}

const AppDropdown: React.FC<DropdownProps> = ({ children, ...props }) => {
  return (
    <DropdownMenu.Root>
      <DropdownTrigger className={props.isTable ? 'is-table' : ''}>
        {children}
        <DropdownMenuIcon />
      </DropdownTrigger>
      <DropdownContent>
        {props.items.map((item, index) => (
          <React.Fragment key={index}>
            <DropdownItem onClick={() => props.onClick(item.value)}>{item.label}</DropdownItem>{' '}
            {index < props.items.length - 1 && props.hasSeparator && <DropdownSeparator />}
          </React.Fragment>
        ))}
      </DropdownContent>
    </DropdownMenu.Root>
  )
}

export default AppDropdown
