import React from 'react';
import PropTypes from 'prop-types'
import { Select, SelectItem, Breadcrumb, BreadcrumbItem, Form, FormGroup, RadioButtonGroup,  RadioButton, Button} from 'carbon-components-react';
import './PadConfig.css';

function PadConfig({changeSampleDirectory, isActive, mode, samplePath, sampleFileName, allFiles, childDirs}) {
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
            <Breadcrumb>
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
                className="some-class"
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
              defaultValue={sampleFileName}
              disabled={false}
              id="select-1"
              inline={true}
              invalid={false}
              invalidText="A valid value is required"
              labelText="Select sample"

              light={false}
              onChange={function (event){
                changeSampleDirectory(1)

              }}
            >
              {
                allFiles.map( (file,index) =>{
                  return <SelectItem
                    key={index}
                    text={file}
                    value={file}
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
          >
            Submit
          </Button>
          <Button
            disabled={false}
            kind="secondary"
            tabIndex={0}
            type="reset"
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
  isActive: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  samplePath: PropTypes.arrayOf(PropTypes.shape(
    {
        id:PropTypes.number,
        name:PropTypes.string
    }
  )).isRequired,
  sampleFileName: PropTypes.string.isRequired,
  allFiles: PropTypes.arrayOf(PropTypes.string).isRequired,
  childDirs:PropTypes.arrayOf(PropTypes.shape(
    {
        id:PropTypes.number,
        name:PropTypes.string
    }
  )).isRequired
}

export default PadConfig;
