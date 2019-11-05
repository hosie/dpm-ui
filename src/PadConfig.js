import React from 'react';
import PropTypes from 'prop-types'
import { Select, SelectItem, Breadcrumb, BreadcrumbItem, Form, FormGroup, RadioButtonGroup,  RadioButton, Button} from 'carbon-components-react';
import './PadConfig.css';

function PadConfig({changeSampleDirectory, fileSelected, onCancel, isActive, onSubmit, mode, samplePath, selectedFile, allFiles, childDirs, padId}) {
  if(isActive){
    return (
      <div className="pad-config">
        <Form>
          <FormGroup legendText="Pad mode">
            <div className="pad-config--mode-selector">
              <RadioButtonGroup
                defaultSelected={mode}
                valueSelected={mode}
                legend="Group Legend"
                name="pad-mode-selector">

                <RadioButton value="one-shot" id="radio-1" labelText="One Shot"/>
                <RadioButton
                  value="loop"
                  id="radio-2"
                  labelText="Loop"
                />
              </RadioButtonGroup>
            </div>
          </FormGroup>

          <FormGroup legendText="Sample">
            <Breadcrumb className="pad-config--directory-breadcrumb">
              {
                samplePath.map( (pathElement,index) => {
                  return(
                    <BreadcrumbItem key={index}>
                      <a href="/#" onClick={function(){
                        console.log(`changing ${pathElement.id}`)

                        changeSampleDirectory(pathElement.id)
                      }}>{pathElement.name}</a>
                    </BreadcrumbItem>
                  )
                })
              }

              <Select
                className="pad-config--directory-selector"
                defaultValue='placeholder-item'
                disabled={false}
                id="select-dir"
                inline={true}
                light={true}
                invalid={false}
                invalidText="A valid value is required"
                labelText="Select directory"
                hideLabel={true}
                onChange={function (event){
                  console.log(`changing ${event.target.value}`)
                  changeSampleDirectory(Number(event.target.value))

                }}
              >
              <SelectItem
                hidden
                text=""
                value="placeholder-item"
              />
                {
                  childDirs.map( (dir,index) =>{
                    return <SelectItem
                      key={index}
                      text={dir.name}
                      value={dir.id}
                    />
                  })
                }

              </Select>

            </Breadcrumb>
            <Select
              className="some-class"
              value={typeof selectedFile.id === 'undefined'?'placeholder':selectedFile.id}
              disabled={false}
              id="select-file"
              inline={true}
              invalid={false}
              invalidText="A valid value is required"
              labelText="Select sample"
              onChange={function (event){
                console.log(`changed ${event.target.value}`)
                fileSelected(Number(event.target.value))

              }}
              light={false}

            >
              <SelectItem
                hidden
                text=""
                value="placeholder"
              />
              {
                allFiles.map( (file,index) =>{
                  return <SelectItem
                    key={index}
                    text={file.filename}
                    value={file.id}
                  />
                })
              }

            </Select>
          </FormGroup>
          <Button
            disabled={false}
            kind="primary"
            tabIndex={0}
            type="button"
            onClick={function(){
              onSubmit(
                padId,
                {
                  mode,
                  sampleId: selectedFile.id
                }
              )
            }}
          >
            Submit
          </Button>
          <Button
            disabled={false}
            kind="secondary"
            tabIndex={0}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Form>
      </div>
    );
  } else {
    return <div/>
  }
}

PadConfig.propTypes = {
  changeSampleDirectory: PropTypes.func.isRequired,
  fileSelected: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  samplePath: PropTypes.arrayOf(PropTypes.shape(
    {
        id:PropTypes.number,
        name:PropTypes.string
    }
  )).isRequired,
  selectedFile: PropTypes.shape(
    {
        id:PropTypes.number,
        filename:PropTypes.string
    }
  ).isRequired,
  allFiles: PropTypes.arrayOf(PropTypes.shape(
    {
        id:PropTypes.number,
        filename:PropTypes.string
    }
  )).isRequired,
  childDirs:PropTypes.arrayOf(PropTypes.shape(
    {
        id:PropTypes.number,
        name:PropTypes.string
    }
  )).isRequired,
  padId: PropTypes.number.isRequired
}

export default PadConfig;
