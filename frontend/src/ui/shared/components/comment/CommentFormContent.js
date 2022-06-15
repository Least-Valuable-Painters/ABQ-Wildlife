import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {FormDebugger} from "../FormDebugger";

export const CommentFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}

                <div className="form-group">
                    <label htmlFor="userHandle">Write your comment here</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="pen-alt"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="commentContent"
                            type="text"
                            value={values.commentContent}
                            placeholder="Write your comment here"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.commentContent && touched.commentContent && (
                            <div className="alert alert-danger">
                                {errors.commentContent}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mb-2" type="submit">Submit</button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </div>


                <FormDebugger {...props} />
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>


    )
};