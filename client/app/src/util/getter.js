import _ from "lodash"

export default function getter(obj) {
  return key => _.get(obj, key)
}
