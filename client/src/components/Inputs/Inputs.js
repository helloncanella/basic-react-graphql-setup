import _ from "lodash"
import React, { useEffect } from "react"
import { TextField } from "@material-ui/core"
import { KeyboardDatePicker } from "@material-ui/pickers"
import { useState } from "react"
import getter from "../../util/getter"
import RadioGroup from "./components/RadioGroup/RadioGroup"

export default {
  text: function TextInput(props) {
    const g = getter(props)

    return (
      <TextField
        label={g("label")}
        className={g("className")}
        inputProps={{
          defaultValue: g("defaultValue"),
          readOnly: g("readOnly"),
          type: g("type") || "text"
        }}
        onChange={e =>
          _.isFunction(g("onChange")) && g("onChange")(e.target.value)
        }
        multiline={g("multiline")}
      ></TextField>
    )
  },
  date: function DateInput(props) {
    const g = getter(props)

    const [date, setDate] = useState(g("defaultValue"))

    useEffect(() => {
      _.isFunction(g("onChange")) && g("onChange")(date)
    }, [date])

    return (
      <KeyboardDatePicker
        label={g("label")}
        className={g("className")}
        clearable
        // {...(date ? { value: date } : { value: "" })}
        value={date}
        onChange={setDate}
        disablePast
        format="DD.MM.YYYY"
        invalidDateMessage={date ? "Format inválido" : ""}
      />
    )
  },
  radioGroup: RadioGroup
}
