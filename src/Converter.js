import './Converter.css';
import {Button, Form,Row, Col, Spinner} from 'react-bootstrap'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

function CurrencyConverter() {
  return (
    <div>
      <h1>Currency Converter</h1>
      <Form>
        <Row>
          <Col sm="3">
            <Form.Control></Form.Control>
          </Col>
        </Row>
      </Form>
    </div>
  //   <div>
  //   <h1>Currency Converter</h1>
  //   <Form>
  //     <Form.Row>
  //       <Col sm="3">
  //         <Form.Control placeholder='0' value={1} required/>
  //       </Col>
  //       <Col sm='3'>
  //         <Form.Control as="select">

  //         </Form.Control>
  //       </Col>
  //       {/* <Col sm='1' className='text-center' style={{paddingTop:'5px'}}>
  //       <FontAwesomeIcon icon={faAngleDoubleRight} />
  //       </Col> */}
  //       <Col sm='3'>
  //         <Form.Control as="select">
            
  //         </Form.Control>
  //       </Col>
  //       <Col sm='2'>
  //         <Button variant='success' type='submit'>
  //           Converter
  //         </Button>
  //       </Col>
  //     </Form.Row>
  //   </Form>
  // </div>
  );
}

export default CurrencyConverter
