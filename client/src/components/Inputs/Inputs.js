import _ from "lodash"
import React from "react"
import getter from "../../../../util/getter"
import { TextField, MenuItem } from "@material-ui/core"
import { KeyboardDatePicker } from "@material-ui/pickers"
import { useState } from "react"
import CollectionsInput from "./components/CollectionsInput/CollectionsInput"
import SelectInput from "./components/CollectionsInput/components/SelectInput/SelectInput"

export default {
  text: function TextInput(props) {
    const g = getter(props)

    return (
      <TextField
        label={g("label")}
        className={g("className")}
        inputProps={{
          defaultValue: g("defaultValue"),
          readOnly: g("readOnly")
        }}
        multiline={g("multiline")}
      ></TextField>
    )
  },
  date: function DateInput(props) {
    const g = getter(props)

    const [date, setDate] = useState(g("defaultValue"))

    return (
      <KeyboardDatePicker
        label={g("label")}
        clearable
        value={date}
        onChange={setDate}
        format="DD.MM.YYYY"
        invalidDateMessage="Ungültiges Datumsformat"
        className={g("className")}
        inputProps={{
          readOnly: g("readOnly")
        }}
      />
    )
  },
  radioGroup: function RadioGroup(props) {
    return (
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    )
  }
}
