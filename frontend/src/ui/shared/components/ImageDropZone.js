import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import "../../upload.css"

export function ImageDropZone({formikProps}) {

    const onDrop = useCallback(acceptedFiles => {

        const formData = new FormData();
        formData.append('image', acceptedFiles[0]);


        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    return (
        <div className="form-group" {...getRootProps()}>
            <div className="input-group input-group-lg">
                <input
                    className="form-control-file"
                    accept="image/*"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    {...getInputProps()}
                />
                {
                    isDragActive ?
                        <div className="text-center p-3 my-3 uploadText bg-primary rounded">
                            <h1><strong>Upload</strong></h1>
                            <p className="my-4">Choose a file to upload from your computer or drag and drop it here.</p>
                        </div>
                        :
                        <div className="text-center p-3 my-3 uploadHeader bg-primary rounded">
                            <h1><strong>Upload</strong></h1>
                            <p className="my-4">Choose a file to upload from your computer or drag and drop it here.</p>
                        </div>
                }
            </div>
        </div>
    )
}