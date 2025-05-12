// components/ProductSelect.tsx
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type ProductSelectProps = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  label?: string;
};

export default function ProductSelect({ options, label = "مدل", selected, onChange }: ProductSelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        sx={{
          fontFamily: 'shabnam, sans-serif',
          color: 'black',
          '&.Mui-focused': { color: 'var(--color-primary-green)' },
        }}
      >
        {label}
      </InputLabel>
      <Select
        value={selected}
        label={label}
        onChange={handleChange}
        sx={{
          fontFamily: 'shabnam, sans-serif',
          borderColor: 'lightgray',
          '& .MuiOutlinedInput-notchedOutline': { borderColor: 'lightgray' },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'gray',
            transition: 'ease',
            transitionDuration: '0.5s',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'lightgray' },
        }}
      >
        {options.map((option, i) => (
          <MenuItem key={i} value={option} sx={{ fontFamily: 'shabnam, sans-serif' }}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
