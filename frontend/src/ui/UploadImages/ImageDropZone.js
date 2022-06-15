import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import "./Upload.css"

export function ImageDropZone({formikProps}) {

    const onDrop = useCallback(acceptedFiles => {

        const formData = new FormData();
        formData.append('image', acceptedFiles[0]);

        const fileReader = new FileReader()
        fileReader.readAsDataURL(acceptedFiles[0])
        fileReader.addEventListener("load", () => {
            formikProps.setSelectedImage(fileReader.result)
        })


        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    return (
        <div className="form-group" {...getRootProps()}>
            <div className="input-group input-group-lg mx-auto d-flex justify-content-center">
                <input
                    className="form-control-file"
                    accept="image/*"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    {...getInputProps()}
                />
                {
                    isDragActive ?

                        <div className="p-3 my-3 uploadText bg-primary rounded">
                            <h1><strong>Upload</strong></h1>
                            <p className="my-4">Choose a file to upload from your computer or drag and drop it here.</p>
                        </div>
                        :
                        <div className="p-3 my-3 uploadText bg-primary rounded">
                            <h1><strong>Upload</strong></h1>
                            <p className="my-4">Choose a file to upload from your computer or drag and drop it here.</p>
                        </div>
                }
            </div>
        </div>
    )
}