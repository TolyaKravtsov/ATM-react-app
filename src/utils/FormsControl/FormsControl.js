import React from 'react';
import stylesForm from "./formsControl.module.css"

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={stylesForm.formControl + "" + hasError ? stylesForm.error : ""}>
            <div>
                <input {...props}{...input}/>
            </div>
            {
                hasError && <span>{meta.error}</span>
            }

        </div>
    )
};