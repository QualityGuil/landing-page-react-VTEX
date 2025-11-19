import React from "react";
import styles from "./index.module.css";

function TextField(props: any) {

    const handleTyping = (event: any) => {
        props.onChanged(event.target.value);
        console.log(props.inputValue);
    }

    return (
        <div className={styles.text__field}>
            <label className={styles.label__field}>
                {props.label}
            </label>
            <input value={props.inputValue} onChange={handleTyping} required={props.obrigatorio} placeholder={props.placeholder} className={styles.input__field}/>
        </div>
    )

}

export default TextField;