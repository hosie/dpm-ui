import React from 'react';
import PropTypes from 'prop-types'
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, RadioButtonGroup,  RadioButton, Button} from 'carbon-components-react';
import './PadConfig.css';

function PadConfig({isActive, mode, samplePath, sampleFileName}) {
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
                samplePath.map(pathElement => {
                  return(
                    <BreadcrumbItem>
                      <a href="/#">{pathElement}</a>
                    </BreadcrumbItem>
                  )
                })
              }
              <BreadcrumbItem href="#" isCurrentPage>
                {sampleFileName}
              </BreadcrumbItem>
            </Breadcrumb>
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
  isActive: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  samplePath: PropTypes.arrayOf(PropTypes.string).isRequired,
  sampleFileName: PropTypes.string.isRequired
}

export default PadConfig;
