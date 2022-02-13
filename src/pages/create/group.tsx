import {
  Box,
  Stepper,
  TextField,
  Step,
  StepLabel,
  Button
} from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import theme from '../../styles/theme'
import { hexToRgb } from '../../utils/convertHashToRgb'

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

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
  banner: Yup.string().required('Required')
})

const Group: React.FC = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        alert(values)
      }
    }
  })

  const [activeStep, setActiveStep] = useState(0)

  const steps = ['Name/Subject', 'Banner']

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
  }

  useEffect(() => {
    if (
      ((formik.errors.name && formik.touched.name) ||
        formik.values.name === '' ||
        (formik.errors.subject && formik.touched.subject) ||
        formik.values.subject === '') &&
      activeStep !== 0
    ) {
      setActiveStep(0)
    }
  }, [activeStep])

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <div className="row">
          <Link href={'/dashboard'}>
            <div className="arrow-back">
              <ArrowBack />
            </div>
          </Link>
          <Stepper activeStep={activeStep} style={{ width: '100%' }}>
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
        </div>
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
                        label="Name*"
                        variant="filled"
                        color="primary"
                        fullWidth
                        InputProps={{ style: { backgroundColor: '#fff' } }}
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.errors.name && formik.touched.name}
                        helperText={
                          formik.errors.name && formik.touched.name
                            ? formik.errors.name
                            : ''
                        }
                        FormHelperTextProps={{
                          style: {
                            fontSize: '1rem',
                            color: '#fff',
                            backgroundColor: `rgba(${(() => {
                              const color = hexToRgb(theme.palette.error.main)
                              return `${color.r}, ${color.g}, ${color.b}`
                            })()}, 0.7)`,
                            margin: 0,
                            padding: 5,
                            borderRadius: '0 0 5px 5px'
                          }
                        }}
                      />
                      <div className="tip">
                        The name is the fundamental basis for the construction
                        of anything. Even a very good one can struggle to
                        establish a connection if its name isn&apos;t efficient.
                      </div>
                    </div>
                    <div className="subject">
                      <TextField
                        label="Subject*"
                        variant="filled"
                        color="primary"
                        multiline
                        minRows={10}
                        fullWidth
                        InputProps={{ style: { backgroundColor: '#fff' } }}
                        style={{ height: 'fit-content' }}
                        name="subject"
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                        error={formik.errors.subject && formik.touched.subject}
                        helperText={
                          formik.errors.subject && formik.touched.subject
                            ? formik.errors.subject
                            : ''
                        }
                        FormHelperTextProps={{
                          style: {
                            fontSize: '1rem',
                            color: '#fff',
                            backgroundColor: `rgba(${(() => {
                              const color = hexToRgb(theme.palette.error.main)
                              return `${color.r}, ${color.g}, ${color.b}`
                            })()}, 0.7)`,
                            margin: 0,
                            padding: 5,
                            borderRadius: '0 0 5px 5px'
                          }
                        }}
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
          <form noValidate onSubmit={formik.handleSubmit}>
            <Button
              type="submit"
              onClick={handleNext}
              variant="contained"
              color="primary"
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </form>
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

  .row {
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: 6rem;
    position: sticky;

    .arrow-back {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 6rem;
      background: ${(p) => p.theme.palette.primary.main};
      color: ${(p) => p.theme.palette.background.default};
      cursor: pointer;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }

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
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 95%;

    @media (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .subject {
    display: flex;
    height: fit-content;
  }

  .name,
  .subject {
    margin: 1rem;
    width: 100%;
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
