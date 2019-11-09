import React from 'react';
import PropTypes from 'prop-types'
import { Form, FormGroup, Button} from 'carbon-components-react';
import './Header.css';

function Header({onSave}) {
  return (
    <Form>
      <FormGroup legendText="header">
        <Button
          disabled={false}
          kind="primary"
          tabIndex={0}
          type="button"
          onClick={function(){
            onSave()
          }}
        >
          Save
        </Button>
      </FormGroup>
    </Form>
  );
}

Header.propTypes = {
  onSave: PropTypes.func.isRequired
}

export default Header;
