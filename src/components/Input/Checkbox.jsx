import React from 'react'
import { Form } from 'react-bootstrap'

const Checkbox = ({
    componentFrom,
    formType,
    formLabel,
    formClassName,
    formId,
    change
}) => {


    return (
        <Form.Check
            type={formType}
            label={formLabel}
            id={formId}
            className={formClassName}
            onChange={change}
        />
    )
}

export default Checkbox