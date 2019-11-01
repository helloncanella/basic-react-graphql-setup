import moment from "moment"
import _ from "lodash"
import React, { useState } from "react"
import {
  Paper,
  Typography,
  Icon,
  Grid,
  TextField,
  Avatar,
  Button
} from "@material-ui/core"

import { makeStyles } from "@material-ui/styles"
import Inputs from "./components/Inputs/Inputs"

function App() {
  const c = useStyles()
  const [formData, setFormData] = useState({})
  const g = key => _.get(formData, key)

  const getOnChange = key =>
    function onChange(value) {
      const clone = _.cloneDeep(formData)
      _.set(clone, key, value)
      setFormData(clone)
    }

  const numberOfDays =
    moment(g("period.end")).diff(g("period.start"), "days") + 1
  const price = 30

  return (
    <div className={c.app}>
      <div className={c.host}>
        <Avatar src="https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-1/p240x240/67767387_10211484358664813_5394730089168502784_n.jpg?_nc_cat=101&_nc_oc=AQkIxjjxYnNkZWB9y9KrmQUJjYVddGlnVPAABzY1KqpyG0_P0NtRPlFv7UysdWi-DmQ&_nc_ht=scontent.fsdu5-1.fna&oh=a9b7e90dbf6c28a14c8d42559b80f5ee&oe=5E57CA03"></Avatar>
        <div>
          <Typography>Andrea Habib</Typography>
          <Typography variant="caption">Anfitrião</Typography>
        </div>
      </div>
      {/* <Paper className={c.container} elevation={3}>
        <Icon fontSize="large" className={c.icon}>
          pets
        </Icon>
        <form action="" className={c.form}>
          {sections.map(({ title, fields = [] }, index) => {
            return (
              <fieldset key={`section-${index}`} className={c.fieldset}>
                <Typography variant="body1">{title.text}</Typography>
                <Grid container spacing={3}>
                  {fields.map((f, index) => (
                    <Grid item key={index} xs={4}>
                      {React.createElement(
                        Inputs[f.type || "text"] || Inputs["text"],
                        {
                          ...f,
                          className: c.input,
                          onChange: getOnChange(f.key)
                        }
                      )}
                    </Grid>
                  ))}
                </Grid>
              </fieldset>
            )
          })}
        </form>

        <div className={c.bottom}>
          {numberOfDays > 1 ? (
            <div className={c.price}>
              <Typography variant="overline">Total</Typography>
              <div className={c.priceDescription}>
                <Typography variant="h6">
                  R$ {numberOfDays * price},00
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {numberOfDays} diária{numberOfDays === 1 ? "" : "s"}
                </Typography>
              </div>
            </div>
          ) : (
            <span></span>
          )}

          <Button
            variant="contained"
            color="primary"
            disabled={!(numberOfDays > 1)}
          >
ton            Pagamento
          </But>
        </div>
      </Paper> */}
      {/* <form action="/processar_pagamento" method="POST">
        <script
          src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
          data-preference-id="57913797-31f06aa5-e70c-46bf-a086-c7627cf033cb"
        ></script>
        <button type="submit">pagar</button>
      </form> */}
      <iframe
        src="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57913797-31f06aa5-e70c-46bf-a086-c7627cf033cb"
        frameborder="0"
        width={500}
        height={500}
      ></iframe>
    </div>
  )
  // return <h1>Hello</h1>
}

const sections = [
  {
    title: {
      text: "Pet"
    },
    fields: [
      { key: "name", label: "Nome" },
      { key: "age", label: "Idade", type: "number" },
      {
        key: "specie",
        label: "Espécie",
        type: "radioGroup",
        options: [
          { value: "cat", label: "Gato" },
          { value: "dog", label: "Cachorro" }
        ]
      },
      {
        key: "isNeuter",
        label: "É castrado?",
        type: "radioGroup",
        options: [
          { value: "true", label: "Sim" },
          { value: "false", label: "Não" }
        ]
      }
    ].map(field => ({ ...field, key: ["pet", field.key].join(".") }))
  },
  {
    title: {
      text: "Proprietário"
      // icon: "person"
    },
    fields: [
      { key: "name", label: "Nome" },
      { key: "whatsapp", label: "WhatsApp", type: "text" },
      { key: "email", label: "Email", type: "email" }
    ].map(field => ({ ...field, key: ["owner", field.key].join(".") }))
  },
  {
    title: {
      text: "Período",
      icon: "timer"
    },
    fields: [
      { key: "start", label: "De", type: "date" },
      { key: "end", label: "Até", type: "date" }
    ].map(field => ({ ...field, key: ["period", field.key].join(".") }))
  }
]

const useStyles = makeStyles(theme => {
  return {
    fieldset: {
      marginBottom: theme.spacing(4),
      border: "none"
    },
    container: {
      width: 700,
      padding: theme.spacing(3)
    },
    price: {},
    priceDescription: {
      display: "flex",
      alignItems: "center",
      "&>*": {
        marginRight: theme.spacing(1)
      }
    },
    host: {
      display: "flex",
      alignItems: "center",
      "&>*": {
        marginRight: theme.spacing(1)
      },
      left: theme.spacing(2),
      top: theme.spacing(2),
      position: "absolute"
    },
    bottom: {
      alignItems: "center",
      marginTop: theme.spacing(7),
      display: "flex",
      justifyContent: "space-between"
    },
    icon: {
      textAlign: "center",
      display: "block",
      width: "100%",
      marginBottom: theme.spacing(5)
    },
    input: {
      width: "100%",
      marginTop: theme.spacing(2)
    },

    form: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(3)
    },
    app: {
      display: "flex",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      flexDirection: "column"
    }
  }
})
export default App
