import { DateRange} from 'react-date-range';
/* eslint-disable react/prop-types */
const Calender = ({ value }) => {
    return (
      <DateRange
        rangeColors={['#F43F5E']}
          ranges={[value]}
         date={value.startDate}
         direction='vertical'
        showDateDisplay={false}
         minDate={value.startDate}
        maxDate={value.endDate}
      />
    )
  }

export default Calender;