import {
  Box,
  Stepper,
  TextField,
  Step,
  StepLabel,
  Button,
  makeStyles
} from '@material-ui/core'
import { useState } from 'react'
import styled from 'styled-components'

interface iFormData {
  name: string
  subject: string
  banner: string
  userId: number
}

const initialValues: iFormData = {
  name: '',
  subject: '',
  banner: '',
  userId: 0
}

const useStyles = makeStyles(() => ({
  textField: {
    height: '2.5rem',
    paddingLeft: 10,
    fontSize: '1.2rem'
  }
}))

const Group: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const steps = ['Name/Subject', 'Banner']

  const classes = useStyles()

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {}
            const labelProps = {}
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {(() => {
          switch (activeStep) {
            case 0:
              return (
                <div
                  className="step"
                  style={{
                    backgroundImage:
                      'url(https://hrmcdn-13a1c.kxcdn.com/images/hr-sg/content-images/arina_oct_2021_employee_hiring_marketing_job_opportunities_123rf.jpg)'
                  }}
                >
                  <div className="inner">
                    <div className="name">
                      <TextField
                        label="Name"
                        variant="filled"
                        color="primary"
                        fullWidth
                        InputProps={{ style: { backgroundColor: '#fff' } }}
                      />
                      <div className="tip">
                        The name is the fundamental basis for the construction
                        of anything. Even a very good one can struggle to
                        establish a connection if its name isn&apos;t efficient.
                      </div>
                    </div>
                    <div className="subject">
                      <TextField
                        label="Subject"
                        variant="filled"
                        color="primary"
                        multiline
                        minRows={10}
                        fullWidth
                        InputProps={{ style: { backgroundColor: '#fff' } }}
                        style={{ height: 'fit-content' }}
                      />
                      <div className="subject-tip">
                        The name is the fundamental basis for the construction
                        of anything. Even a very good one can struggle to
                        establish a connection if its name isn&apos;t efficient.
                      </div>
                    </div>
                  </div>
                </div>
              )
              break
            case 1:
              return <div className="step">oi</div>
              break

            default:
              break
          }
        })()}
        <div className="buttons">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="contained"
            color="primary"
          >
            Back
          </Button>
          <Box />
          <Button onClick={handleNext} variant="contained" color="primary">
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </Box>
    </Container>
  )
}

export default Group

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  .step {
    width: 100%;
    height: 90%;
    background-size: cover;
    background-position: bottom;
    position: relative;
  }

  .inner {
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 95%;
  }

  .subject {
    display: flex;
    height: fit-content;
    width: 60%;
  }

  .name,
  .subject {
    margin: 1rem;
  }

  .tip,
  .subject-tip {
    font-size: 1rem;
    background-color: ${(p) => p.theme.palette.background.default};
    padding: 2rem;
    width: 15rem;
    border-radius: 1rem;
    box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
    margin-top: 1.5rem;
    margin-right: 10rem;
  }

  .subject-tip {
    width: 40%;
    margin: 0;
    margin-left: 1.5rem;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2rem;
    position: absolute;
    bottom: 0;

    button {
      font-size: 1.5rem;
    }
  }

  .MuiStepLabel-label {
    font-size: 1.3rem;
  }
  .MuiStepIcon-root {
    font-size: 2rem;
  }
  .MuiStepIcon-text {
    font-size: 1.3rem;
  }
`
