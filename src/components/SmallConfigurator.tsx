import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio
} from '@nextui-org/react'

const colors = [
  'default',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger'
] as const

type Colors = (typeof colors)[number]

const SmallConfigurator = () => {
  const [selectedColor, setSelectedColor] = React.useState<Colors>('default')

  const setSelected = (value: string) => {
    setSelectedColor(value as Colors)
  }

  return (
    <div className='flex flex-col gap-3'>
      <Table
        color={selectedColor}
        selectionMode='multiple'
        defaultSelectedKeys={['2', '3']}
        aria-label='Example static collection table'
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key='2'>
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key='3'>
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key='4'>
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <RadioGroup
        label='Selection color'
        orientation='horizontal'
        value={selectedColor}
        onValueChange={setSelected}
      >
        {colors.map((color) => (
          <Radio key={color} color={color} value={color} className='capitalize'>
            {color}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  )
}

export { SmallConfigurator }
