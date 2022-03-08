import Vue from 'vue'
import moment from 'moment'

Vue.filter('timeFormat', (value, type) => {
  if (!value) return ''
  moment.locale()
  type = type || 'LL'
  return moment(value).format(type)
})
