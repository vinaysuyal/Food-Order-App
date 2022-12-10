import './SignInUpToggler.css';
const SignInUpToggler = (props) => {
  const changeHandler = (event) => {
    props.changeHandler(event.target.value);
  }
  return (
    <>
      <div class="container">
        <div class="switches-container">
          <input onChange={changeHandler}
            type="radio"
            id="switchMonthly"
            name="switchPlan"
            value="SignIn"
            checked={props.value === 'SignIn' ? 'checked': ''}
          />
          <input onChange={changeHandler}
            type="radio"
            id="switchYearly"
            name="switchPlan"
            value="SignUp"
            checked={props.value === 'SignUp' ? 'checked': ''}
          />
          <label for="switchMonthly">SignIn</label>
          <label for="switchYearly">SignUp</label>
          <div class="switch-wrapper">
            <div class="switch">
              <div>SignIn</div>
              <div>SignUp</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInUpToggler;
