import Select from 'react-select'

import React from 'react'

const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'hsl(var(--clr-primary-100))',
      border: 'none',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: 'hsl(var(--clr-primary-100))',
      margin: '0',
    }),
  },
  options = [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ]

function RegionSelect() {
  return (
    <Select
      options={options}
      styles={customStyles}
      className="select"
      placeholder={'Select by Region'}
    />
  )
}

export default RegionSelect
