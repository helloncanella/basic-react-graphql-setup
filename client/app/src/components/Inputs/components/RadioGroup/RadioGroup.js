import _ from "lodash"
import React from "react"
import {
  Typography,
  Radio,
  Grid,
  makeStyles,
  FormLabel
} from "@material-ui/core"
import getter from "../../../../util/getter"

export default function RadioGroup(props) {
  const [value, setValue] = React.useState("")
  const g = getter(props)

  const c = useStyles()
  const handleChange = event => {
    const value = event.target.value
    setValue(value)
    _.isFunction(setValue) && setValue(value)
  }

  return (
    <div className={g("className")}>
      <FormLabel component="legend" className={c.title}>
        {g("label")}
      </FormLabel>

      <Grid container spacing={1}>
        {(g("options") || []).map(({ value: optionValue, label }) => {
          return (
            <Grid item xs={6} className={c.radio}>
              <Radio
                edge="start"
                checked={value === optionValue}
                onChange={handleChange}
                value={optionValue}
              />
              <Typography>{label}</Typography>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  radio: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    marginBottom: theme.spacing(1)
  }
}))
