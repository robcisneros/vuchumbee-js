import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectMenuUI = (props) => {
  const [option, setOption] = React.useState('');
  const [flavor, setFlavor] = React.useState('');


  const optionsHandleChange = (event) => {
    setOption(event.target.value);
    console.log("selecionado: ", event.target.value);
  };
  const flavorHandleChange = (event) => {
    setFlavor(event.target.value);
    console.log("selecionado: ", event.target.value);
  };

  return (
    <div>
        
      <FormControl sx={{ m: 1, minWidth: 150 }} className="flex w-full justify-center mb-8">
        <InputLabel id="option-label">Selecciona</InputLabel>
        <Select
          labelId="option"
          id="option"
          value={option}
          label="option"
          onChange={optionsHandleChange}
        >
          {props.options.map((options) => (
            <MenuItem
              key={options.titulo}
              value={options.precio}
            >
              {options.titulo}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Por favor selecciona una opción</FormHelperText>
      </FormControl>
      <span>Hi</span>
    </div>
  );
}
export default SelectMenuUI;