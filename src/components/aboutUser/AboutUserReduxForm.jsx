import React from "react";
import aboutUserStylesheet from "./aboutUser.module.css"
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators/Validators";
import {Input} from "../../utils/FormsControl/FormsControl";
import {Field} from "redux-form";


let maxLength20 = maxLengthCreator(20);
let minLength5 = minLengthCreator(5);


const AboutUser = (props) => {
    return (
        <div className={aboutUserStylesheet.center}>
            <h1>fill in the information</h1>
            <form onSubmit={props.handleSubmit}>
                <div className={aboutUserStylesheet.padding}>
                    <div>
                        <Field placeholder="FIO" name={"FIO"} component={Input}
                               validate={[requiredField, maxLength20, minLength5]}/>
                    </div>
                    <div>
                        <Field placeholder="Date of Birth" name={"DateOfBirth"} component={Input}
                               validate={[requiredField]}/>
                    </div>
                    <div>
                        <Field placeholder="sex" name={"sex"} component={Input}
                               validate={[requiredField]}/>
                    </div>
                    <div>
                        <Field placeholder="married" name={"married"} component={Input}
                               validate={[requiredField]}/>
                    </div>
                    <div>
                        <Field placeholder="passport Series" name={"passportSeries"} component={Input}
                               validate={[requiredField]}/>
                    </div>
                    <div>
                        <Field placeholder="Place of Birth" name={"PlaceOfBirth"} component={Input}
                               validate={[requiredField]}/>
                    </div>
                    <div>
                        <Field placeholder="Telephone" name={"Telephone"} component={Input}
                               validate={[requiredField]}/>
                    </div>
                    <div>
                        <Field placeholder="nationality" name={"nationality"} component={Input}
                               validate={[requiredField]}/>
                    </div>
                </div>
                <div>
                    <button>
                        Save Info
                    </button>
                </div>

            </form>
        </div>
    )
};

export default AboutUser