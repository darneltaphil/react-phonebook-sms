import React, {useReducer} from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUser, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import {validate} from "../Utils/Validators"
const searchReducer = (state, action) => {
  switch (action.type){
    case 'CHANGE':
      return{
        ...state,
        value: action.val,
        isValid:validate(action.val, action.validators )
      };
      case 'TOUCH':
        return{
          ...state,
          isTouched:true
        }
      default:
      return state 
  }
}

const CustomerSearchForm = (props) => {
  //console.log(props)
    //const [search, setSearch] = useState('');
   const [ searchState, dispatch ] = useReducer(searchReducer, {
     value:'', 
     isValid:false,     
     isTouched:false
     });
    

     const handleSearch = e => {
      dispatch({
        type:'CHANGE', 
        val: e.target.value,
        validators: props.validator
      })
        
    }   
    
    const touchHandler = () => {
      dispatch({
        type:'TOUCH', 
      })
        
    }

    return(
        <Form>
            <Form.Group as={Col} md="4" controlID="searchform">
            <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend" ><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Search"
              aria-describedby="inputGroupPrepend"
              value={searchState.value}
              required
              validators={[props.validator]}
              onChange={handleSearch}
              onBlur={touchHandler }
              className={`${!searchState.isValid && searchState.isTouched && 'border-danger'}`}
            />

            <InputGroup.Append>
              <InputGroup.Text id="inputGroupAppend" ><FontAwesomeIcon icon={faWindowClose} /></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          {!searchState.isValid && <span>{props.errotText}</span>}
            </Form.Group>
        </Form>
    )
}
export default CustomerSearchForm