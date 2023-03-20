import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}) {
  return(
    <div className={styles.form_control}>
      <label 
        htmlFor={name}>
        {text}
      </label>
      <select name={name} id={name}>
        {
          options.map((item) => {
            return (
              <option 
                value={item.id} 
                key={item.id}>
                {item.name}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Select