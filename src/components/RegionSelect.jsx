import Select from 'react-select'

const customStyles = {
    container: (defaultStyles) => ({
      ...defaultStyles,
      width: '50%',
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: 'var(--clr-text)',
      }
    },
    control: (defaultStyles, state) => ({
      ...defaultStyles,
      paddingBlock: 'var(--p-block)',
      paddingInline: '0.5rem',
      border: 'none',
      fontSize: 'var(--fs-300)',
      color: 'var(--clr-text)',
      backgroundColor: 'hsl(var(--clr-primary-100))',
      boxShadow: state.isFocused ? null : null,
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      borderRadius: '5px',
      backgroundColor: 'hsl(var(--clr-primary-100))',
    }),
    menuList: (defaultStyles) => ({
      ...defaultStyles,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    option: (defaultStyles, { data, isDisabled, isFocused, isSelected }) => ({
      ...defaultStyles,
      fontSize: 'var(--fs-300)',
      color: 'var(--clr-text)',
      backgroundColor: isFocused ? 'hsl(var(--clr-bg), 0.8)' : 'transparent',
      boxShadow: isFocused ? 'inset 0 0 0 1px var(--clr-text)' : 'none',
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: 'var(--clr-text)',
    }),
  },
  options = [
    { value: 'africa', label: 'Africa' },
    { value: 'americas', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ]

function RegionSelect({ onChange, selected }) {
  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder={'Filter by Region'}
      components={{
        IndicatorSeparator: () => null,
      }}
      onChange={onChange}
      value={options.filter((option) => option.value === selected)}
    />
  )
}

export default RegionSelect
