import * as React from 'react';
import {
  FormField,
  Input,
  Provider,
  teamsTheme,
} from '@fluentui/react-northstar';
import { Field, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginTop: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'grid',
    // justify-content: 'space-evenly',
    width: "fit-content",
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
    gridGap: '20px',
    // width: '80%',
    // justify-content: 'space-evenly',
  },
  formField: {
    gridColumn: 'span 1',
    width: '100%',
  },
  submitButton: {
    marginTop: '20px',
    width: '100%',
  },
});

const ClinicForm: React.FC = () => {
  const styles = useStyles();

  return (
    <Provider theme={teamsTheme}>
      <div className={styles.root}>
        <h3 className={styles.heading}>See why clinics are switching to Cortico</h3>
        <p className={styles.subheading}>
          A 30-minute call could transform your practice forever.
        </p>
        <form className={styles.form}>
          {/* Row 1 - Two fields */}
          <Field className={styles.formField}>
            <FormField label="Clinic/Institution Name" required>
              <Input placeholder="Enter clinic name" />
            </FormField>
          </Field>
          <Field className={styles.formField}>
            <FormField label="Number of Providers" required>
              <Input type="number" placeholder="Enter number of providers" />
            </FormField>
          </Field>

          {/* Row 2 - One field spanning two columns */}
          <Field className={styles.formField} style={{ gridColumn: 'span 2' }}>
            <FormField label="Contact Name" required>
              <Input placeholder="Enter contact name" />
            </FormField>
          </Field>

          {/* Row 3 - Two fields */}
          <Field className={styles.formField}>
            <FormField label="Email Address" required>
              <Input type="email" placeholder="Enter email address" />
            </FormField>
          </Field>
          <Field className={styles.formField}>
            <FormField label="Mobile Phone" required>
              <Input placeholder="Enter mobile phone" />
            </FormField>
          </Field>

          {/* Row 4 - One field spanning two columns */}
          <Field className={styles.formField} style={{ gridColumn: 'span 2' }}>
            <FormField label="How did you hear about us?" required>
              <Input placeholder="Enter referral source" />
            </FormField>
          </Field>

          {/* Row 5 - One field spanning two columns */}
          <Field className={styles.formField} style={{ gridColumn: 'span 2' }}>
            <FormField label="Your Clinic's Software System (EMR / EHR)" required>
              <Input placeholder="Ex. Epic, Accuro, Athena, Oscar…" />
            </FormField>
          </Field>

          <button
            type="submit"
            className={`${styles.submitButton} bg-pink-normal hover:bg-pink-active py-2 rounded-md text-white font-bold`}
          >
            Submit
          </button>
        </form>
      </div>
    </Provider>
  );
};

export default ClinicForm;
